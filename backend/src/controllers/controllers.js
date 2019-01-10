const model = require('../model/model')

const getCards = (req, res, next) => {
  const cards = model.getCards()
  res.send({ cards })
}

const getCampaigns = (req, res, next) => {
  const campaigns = model.getCampaigns()
  res.send({ campaigns })
}

module.exports = {
  getCards,
  getCampaigns
}
