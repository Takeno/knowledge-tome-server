const AWS = require('aws-sdk');

if (process.env.DYNAMO_LOCAL) {
    AWS.config.update({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    });
}

const docClient = new AWS.DynamoDB.DocumentClient();

const POSTS_TABLE = 'postsTable';
const TOKENS_TABLE = 'tokensTable';

async function init() {
    return Promise.resolve(true);
}

async function isAlreadyParsed(post) {
    const params = {
        TableName: POSTS_TABLE,
        Key: {
            link: post.link,
        },
    };

    const results = await docClient.get(params).promise();

    return !!results.Item;
}

async function addPost(post) {
    const params = {
        TableName: POSTS_TABLE,
        Item: {
            ...post,
            pubDate: post.pubDate.toJSON(),
        },
        ReturnValues: 'NONE',
    };

    await docClient.put(params).promise();

    return true;
}

async function getPosts(languages, channels, limit = 50, offset = 0) {
    const channelValues = channels.reduce(
        (values, channel, index) => ({
            ...values,
            [`:channel_${index + 1}`]: channel,
        }),
        {}
    );

    const languageValues = languages.reduce(
        (values, language, index) => ({
            ...values,
            [`:language_${index + 1}`]: language,
        }),
        {}
    );

    const params = {
        TableName: POSTS_TABLE,
        FilterExpression: `channelCode IN (${Object.keys(channelValues).join(
            ', '
        )}) and lang IN  (${Object.keys(languageValues).join(', ')})`,
        ExpressionAttributeValues: {
            ...channelValues,
            ...languageValues,
        },
    };

    const results = await docClient.scan(params).promise();

    // in-memory sort because I was not able to sort a f*cking dynamo scan
    return results.Items.map(post => ({
        ...post,
        pubDate: new Date(post.pubDate),
    })).sort(
        (postA, postB) => postB.pubDate.getTime() - postA.pubDate.getTime()
    );
}

async function saveToken(token, languages, channels) {
    const params = {
        TableName: TOKENS_TABLE,
        Item: {
            token,
            languages: JSON.stringify(languages),
            channels: JSON.stringify(channels),
        },
        ReturnValues: 'NONE',
    };

    await docClient.put(params).promise();

    return true;
}

async function getTokensByChannel(channel) {
    const params = {
        TableName: TOKENS_TABLE,
        FilterExpression: `contains(channels, :channel)`,
        ExpressionAttributeValues: {
            ':channel': channel,
        },
    };

    const results = await docClient.scan(params).promise();

    return results.Items.map(user => user.token);
}

module.exports = {
    init,
    isAlreadyParsed,
    addPost,
    getPosts,
    saveToken,
    getTokensByChannel,
};
