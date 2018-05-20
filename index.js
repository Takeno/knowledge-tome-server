const fetchFeed = require('./lib/fetch-feed');
const channels = require('./data/channels.json');
const db = require('./lib/db');
const postDecorator = require('./lib/post-decorator');

// Fetch all feeds and put them in db
(async function() {
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
})();
