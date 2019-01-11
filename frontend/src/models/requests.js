import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

const getCards = async () => {
  try {
    return await axios.get(`${BASE_URL}/cards`)
  } catch (e) {
    console.error(e)
  }
}

const getCampaigns = async () => {
  try {
    return await axios.get(`${BASE_URL}/campaigns`)
  } catch (e) {
    console.error(e)
  }
}

export default {
  getCampaigns,
  getCards
}