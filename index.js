const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let temprature = [22, 26, 19, 30, 23, 28, 17, 31];

function filterHighTemperatures(temp) {
  return temp > 25;
}

app.get('/high-temperatures', (req, res) => {
  let highTemperatures = filterHighTemperatures(temprature);

  let result = temprature.filter((temp) => filterHighTemperatures(temp));

  res.json(result);
});

let lowPrices = [80, 120, 95, 150, 60, 110];

function filterLowPrices(lowPrice) {
  return lowPrice <= 100;
}

app.get('/low-prices', (req, res) => {
  let lowprices = filterLowPrices(lowPrices);
  let result = lowPrices.filter((lowPrice) => filterLowPrices(lowPrice));
  res.json(result);
});

let ratings = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];

function filterHighRatings(rating) {
  return rating > 3.5;
}

app.get('/high-ratings', (req, res) => {
  let highRatings = filterHighRatings(ratings);
  let result = ratings.filter((rating) => filterHighRatings(rating));
  res.json(result);
});

let names = ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita'];

function filterLongIndianNames(name) {
  return name.length > 6;
}

app.get('/long-indian-names', (req, res) => {
  let longIndianNames = filterLongIndianNames(names);
  let result = names.filter((name) => filterLongIndianNames(name));
  res.json(result);
});

let products = [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts(product, filterParam) {
  return product < filterParam;
}

app.get('/cheaper-products', (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let cheaperProducts = filterCheaperProducts(products, filterParam);
  let result = products.filter((product) =>
    filterCheaperProducts(product, filterParam)
  );

  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
