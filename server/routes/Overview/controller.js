const axios = require('axios');
const TOKEN = require('../../../config.js');

const getProduct = function (req, res) {
  const { id } = req.params;
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    headers: { Authorization: `${TOKEN.TOKEN}` },
  })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('ERROR GETTING PRODUCT DATA');
    });
};

const getStyles = function (req, res) {
  const { id } = req.params;
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`,
    headers: { Authorization: `${TOKEN.TOKEN}` },
  })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('ERROR GETTING PRODUCT STYLES DATA');
    });
};

module.exports = {
  getProduct,
  getStyles,
};
