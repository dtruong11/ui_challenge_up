const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/cards', ctrl.getCards)
router.get('/campaigns', ctrl.getCampaigns)

module.exports = router;
