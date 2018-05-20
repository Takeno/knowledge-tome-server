# KnoledgeTome - server

This software is designed to fetch articles from multiple RSS feeds defined in [channels.json](./data/channels.json), store theme in a database and generate a single feed based on user interests.

The purpose is create a feed aggregator for [Magic Judges world](https://magicjudges.org).

## How it works
There is a scheduled task (fetchNewArticles) which fetch new articles from [channels.json](./data/channels.json).
Then, the deployed endpoint `/feed?langs=ita,eng&channels=06d199,429ab1` will provide an RSS Feed with articles filtered by `lang` and `channel`.


### Specifications
It is written in Javascript for [Node.js](https://nodejs.org), based on [Serverless Framework](https://serverless.com/framework/docs/). It is ready to be run as microfunctions on AWS Lambda and DynamoDB as database, but it is designed to be easily converted in server-_full_ version.

### Getting started
- `npm install`
- `npm run dynamodb:install` to install local version of dynamodb
- `npm run aws:offline`


### Deploy
- Check serverless aws [pre-requisites](https://serverless.com/framework/docs/providers/aws/guide/quick-start/#pre-requisites)
- `npm run aws:deploy`
