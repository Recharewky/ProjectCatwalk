const express = require('express');
const axios = require('axios');
const api = require('./Routes/Reviews/api.js');

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));

app.post('/relatedProducts/post/:id', (req, res) => {
  api.getAllRelatedProducts(req.params.id, (err, success) => {
    if (err) {
      console.log('Error in fetching data from API');
      res.sendStatus(400);
    } else {
      res.status(201).send(success.data);
    }
  });
});

app.post('/relatedProducts/postAProduct/:id', (req, res) => {
  api.getAProduct(req.params.id, (err, success) => {
    if (err) {
      console.log('Error in fetching data from API');
      res.sendStatus(400);
    } else {
      res.status(201).send(success);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.export = app;
