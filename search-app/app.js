const scrape = require('./scrape')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Send shelter lookup requests to /shelter?city={CITY NAME}&state={STATE NAME}' +
            '\nCan add optional param &filter with options:\n \t\"family\"')
});

app.get('/shelter?', async (req, res) => {
    const city = req.query.city;
    const state = req.query.state;
    const filter = req.query.filter;
    const shelterList = await scrape.getHSDShelters(city, state);
    const familyShelters = scrape.filterByShelterType(shelterList, filter);
    res.json({ shelters: familyShelters });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
