const axios = require('axios');
const TOKEN = require('../../../config');

const getAllRelatedProducts = function (productID, callback) {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/related`,
    headers: { Authorization: `${TOKEN.TOKEN}` },
  })
    .then((response) => {
      console.log('Successfully retrieved data from API');
      callback(null, response);
    })
    .catch((err) => {
      console.log('Error fetching data from API');
      callback(err);
    });
};

const getAProduct = function (productID, callback) {
  console.log(productID);
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}`,
    headers: { Authorization: `${TOKEN.TOKEN}` },
  })
    .then((response) => {
      console.log('Successfully retrieved data from API');
      callback(null, response);
    })
    .catch((err) => {
      console.log('Error fetching data from API');
      callback(err);
    });
};

module.exports.getAllRelatedProducts = getAllRelatedProducts;
module.exports.getAProduct = getAProduct;
