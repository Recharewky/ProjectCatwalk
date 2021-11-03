/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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
  const productObj = {};
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}`,
    headers: { Authorization: `${TOKEN.TOKEN}` },
  })
    .then((response) => {
      productObj.name = response.data.name;
      productObj.default_price = Number(response.data.default_price);
      productObj.description = response.data.description;
      productObj.category = response.data.category;
      axios({
        method: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?product_id=${productID}`,
        headers: { Authorization: `${TOKEN.TOKEN}` },
      })
        .then((response1) => {
          // let average = 0;
          // let total = 0;
          // let counter = 0;
          const ratingsObj = response1.data.ratings;
          productObj.ratings = ratingsObj;
          // for (const key in ratingsObj) {
          //   total += (Number(key) * Number(ratingsObj[key]));
          //   console.log('total', total);
          //   counter += Number(ratingsObj.ratings[key]);
          //   console.log('counter', counter);
          // }
          // // console.log('total', total);
          // // console.log('counter', counter);
          // average = counter === 0 ? 0 : total / counter;
          // average = total / counter;
          // productObj.ratings = average;
          // console.log(productObj);
          axios({
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/styles`,
            headers: { Authorization: `${TOKEN.TOKEN}` },
          })
            .then((response2) => {
              productObj.photos = response2.data.results;
              callback(null, productObj);
            });
        })
        .catch((err) => callback(err));
    })
    .catch((err) => {
      console.log('Error fetching data from API');
      callback(err);
    });
};

const getReviews = (id) => axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
  params: {
    product_id: id,
  },
  headers: {
    Authorization: TOKEN.TOKEN,
  },
});

module.exports = {
  getReviews,
  getAllRelatedProducts,
  getAProduct,
};
