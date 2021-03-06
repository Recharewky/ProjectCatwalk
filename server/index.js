const express = require('express');
const axios = require('axios');
const api = require('./routes/Reviews/api.js');
const overviewController = require('./routes/Overview/controller.js');

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.json());

app.post('/relatedProducts/post/:id', (req, res) => {
  api.getAllRelatedProducts(req.params.id, (err, success) => {
    if (err) {
      console.log('Error in fetching data from API');
      res.sendStatus(400);
    } else {
      console.log(success.data);
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

//* **********Overview***************//

//* **********Related***************//

//* **********QA***************//

//* **********Reviews***************//
app.get('/reviews', (req, res) => {
  console.log('get request from server');
  api.getReviews(req.query.product_id)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/reviews/meta', (req, res) => {
  const id = req.query.product_id;
  api.getMetaReviews(id)

    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/products/:id', overviewController.getProduct);

app.get('/products/:id/styles', overviewController.getStyles);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


module.export = app;
