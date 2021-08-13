const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
      res.send(`Express Demo App CI/CD`);
})

app.get('/products',(req, res) => {
      res.send([
            {product_id: 100, price: 100},
            {product_id: 101, price: 101},
            {product_id: 102, price: 102},
            {product_id: 103, price: 103},
            {product_id: 104, price: 104},
      ]);
})

app.listen(port, () => {
      console.log(`server running on port ${port}`);
})