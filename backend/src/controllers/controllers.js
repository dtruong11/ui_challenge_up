const model = require('../model/model')

const getCards = (req, res, next) => {
  try {
    const cards = model.getCards()
    res.send({ cards })
  } catch (e) {
    console.error(e)
  }
}

const getCampaigns = (req, res, next) => {
  try {
    const campaigns = model.getCampaigns()
    res.send({ campaigns })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getCards,
  getCampaigns
}
