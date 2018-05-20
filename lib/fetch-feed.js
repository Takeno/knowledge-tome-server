const Parser = require('rss-parser');
const franc = require('franc-min');

// https://github.com/wooorm/franc/tree/master/packages/franc-min#support
const SUPPORTED_LANGUAGES = [
    'ita',
    'eng',
    'fra',
    'deu',
    'spa',
    'pol',
    'cmn',
    'rus',
    'por',
    'jpn',
    'kor',
];

const parser = new Parser({
    customFields: {
        // https://github.com/bobby-brennan/rss-parser/issues/58
        item: ['description'],
    },
});

module.exports = async function fetchFeed(url) {
    const channel = await parser.parseURL(url);

    const items = channel.items.map(item => ({
        title: item.title,
        description: item.description,
        link: item.link,
        category: item.category,
        pubDate: new Date(item.pubDate),
        // `lang` because `language` is reserverd word for dynamo
        lang: franc(`${item.title}\n${item.description}\n${item.content}`, {
            whitelist: SUPPORTED_LANGUAGES,
        }),
    }));

    return items;
};
