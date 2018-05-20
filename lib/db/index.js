if (process.env.DB === 'lowdb') {
    module.exports = require('./lowdb-adapter');
} else {
    module.exports = require('./dynamodb-adapter');
}
