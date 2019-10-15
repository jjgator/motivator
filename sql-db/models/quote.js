const db = require('../config.js')
const Sequelize = require('sequelize')

const Quote = db.define('quote', {
  text: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  }
});

Quote.sync().then(() => {
  console.log('Created quotes table')
});

module.exports = Quote;