const path = require('path')

const express = require('express');

const rootDir = require('../utils/path')
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  const products = adminData.products
  res.render('shop', {
    products,
    pageTitle: 'Shop Index',
    path: '/',
    activeShop: true,
    hasProducts: products.length > 0,
    activeShop: true,
    formsCSS: true,
    productCSS: true,
  })
});

module.exports = router