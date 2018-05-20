const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(`${__dirname}/../../.db.json`);
const db = low(adapter);

async function init() {
    db.defaults({posts: [], tokens: []}).write();

    return Promise.resolve();
}

async function isAlreadyParsed(post) {
    const fromDb = db
        .get('posts')
        .find({link: post.link})
        .value();

    return !!fromDb;
}

async function addPost(post) {
    db
        .get('posts')
        .push(post)
        .write();

    return true;
}

async function getPosts(languages, channels, limit = 50, offset = 0) {
    return db
        .get('posts')
        .sortBy('pubDate')
        .value()
        .reverse()
        .filter(post => channels.includes(post.channelCode))
        .filter(post => languages.includes(post.lang))
        .slice(offset, offset + limit);
}

async function saveToken(token, languages, channels) {
    const user = db
        .get('tokens')
        .find({token: token})
        .value();

    if (!user) {
        db
            .get('tokens')
            .push({
                token,
                languages,
                channels,
            })
            .write();
    }

    db
        .get('tokens')
        .find({token})
        .assign({languages, channels})
        .write();

    return true;
}

async function getTokensByChannel(channel) {
    return db
        .get('tokens')
        .value()
        .filter(user => user.channels.includes(channel))
        .map(user => user.token);
}

module.exports = {
    init,
    isAlreadyParsed,
    addPost,
    getPosts,
    saveToken,
    getTokensByChannel,
};
