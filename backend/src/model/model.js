const cards = require('./data/cards')
const campaigns = require('./data/campaigns')

const getCards = () => {
  return cards 
}

const getCampaigns = () => {
  return campaigns
}

module.exports = {
  getCards,
  getCampaigns
}