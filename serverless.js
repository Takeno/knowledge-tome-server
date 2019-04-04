const db = require('./lib/db');
const channels = require('./data/channels.json');
const fetchFeed = require('./lib/fetch-feed');
const postDecorator = require('./lib/post-decorator');
const {Feed} = require('feed');

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
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
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

    const feed = new Feed({
        title: 'KnowledgeTome',
        description: "Articles from judge's blogs",
        id: 'https://tolaria.academy/',
        link: 'https://tolaria.academy/',
        generator: 'npm install feed', // optional, default = 'Feed for Node.js'
        author: {
            name: 'Matteo Manchi',
            email: 'matteo.manchi@gmail.com',
        },
    });

    posts.forEach(post =>
        feed.addItem({
            title: post.title,
            description: post.description,
            link: post.link,
            id: post.link,
            categories: [feed.channel, post.category],
            date: post.pubDate,
        })
    );

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
        },
        body: feed.rss2(),
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
