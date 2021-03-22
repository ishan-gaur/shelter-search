const hsd = require('./scrape-hsd')
const express = require('express');
// const { _, performance } = require('perf_hooks');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Send shelter lookup requests to /shelter?city={CITY NAME}&state={STATE NAME}')
});

app.get('/shelter?', async (req, res) => {
    let city = req.query.city;
    let state = req.query.state;
    // let start = performance.now();
    let shelterList = await hsd.getShelters(city, state);
    // let finish = performance.now();
    // console.log(finish - start);
    res.send(shelterList);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
