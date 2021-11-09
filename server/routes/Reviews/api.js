const axios = require('axios');
const TOKEN = require('../../../config.js');


const getReviews = (id) =>
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews`,
    params: {
      product_id: id
    },
    headers: {
      'Authorization': TOKEN.TOKEN
    }
  })

  const getMetaReviews = (id) =>
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta',
    params: {
      product_id: id
    },
    headers: {
      'Authorization': TOKEN.TOKEN
    }
  });
module.exports = {
  getReviews,
  getMetaReviews
}


