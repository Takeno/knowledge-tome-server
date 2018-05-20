const db = require('./lib/db');
const channels = require('./data/channels.json');
const fetchFeed = require('./lib/fetch-feed');
const postDecorator = require('./lib/post-decorator');
const RSS = require('rss');

module.exports.channels = async () => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(channels),
    };

    return response;
};

module.exports.articles = async event => {
    await db.init();
    const params = event.queryStringParameters;
    const channels = params['channels'].split(',');
    const langs = params['lang'].split(',');

    const posts = await db.getPosts(langs, channels);

    const response = {
        statusCode: 200,
        body: JSON.stringify(posts),
    };

    return response;
};

module.exports.feed = async event => {
    await db.init();
    const params = event.queryStringParameters;
    const channels = params['channels'].split(',');
    const langs = params['lang'].split(',');

    const posts = await db.getPosts(langs, channels);

    const feed = new RSS({
        title: 'KnowledgeTome',
        description: "Articles from judge's blogs",
        managingEditor: 'Matteo Manchi',
        language: langs.join(', '),
        pubDate: new Date(),
        ttl: '120',
    });

    posts.forEach(post =>
        feed.item({
            title: post.title,
            description: post.description,
            url: post.link,
            categories: [feed.channel, post.category],
            date: post.pubDate,
        })
    );

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/xml',
        },
        body: feed.xml(),
    };

    return response;
};

module.exports.fetchNewArticles = async () => {
    await db.init();

    const blogQueue = channels.map(blog => {
        const channelQueue = blog.subchannels.map(async channel => {
            const posts = await fetchFeed(channel.feed);

            const postQueue = posts
                .map(post => postDecorator(post, channel, blog))
                .map(async post => {
                    const alreadyParsed = await db.isAlreadyParsed(post);

                    if (alreadyParsed) {
                        return;
                    }

                    await db.addPost(post);
                    // send notif
                    console.log('New blog post: ', post.title);
                });

            await Promise.all(postQueue);
        });

        return Promise.all(channelQueue);
    });

    await Promise.all(blogQueue);

    return {success: true};
};

module.exports.saveToken = async event => {
    await db.init();
    const params = event.queryStringParameters;
    const token = params.token;
    const channels = [].concat(params['channels[]']);
    const langs = [].concat(params['lang[]']);

    await db.saveToken(token, langs, channels);

    const response = {
        statusCode: 200,
        body: JSON.stringify({success: true}),
    };

    return response;
};
