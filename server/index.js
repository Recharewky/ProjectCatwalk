const express = require('express');
const axios = require('axios');
const reviews = require('./routes/Reviews/api.js');



const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
//***********Overview***************//


//***********Related***************//


//***********QA***************//


//***********Reviews***************//
app.get('/reviews', (req, res) => {
  console.log('get request from server')
  reviews.getReviews(req.query.product_id)
      .then((data) => {
          res.status(200).send(data.data);
      })
      .catch((err) => {
          res.status(404).send(err);
      })
})



// module.export = app;