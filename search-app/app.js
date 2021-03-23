const path = require('path');
const scrape = require('./scrape')
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get('/shelter?', async (req, res) => {
    const city = req.query.city;
    const state = req.query.state;
    const filter = req.query.filter;
    const shelterList = await scrape.getHSDShelters(city, state);
    const familyShelters = scrape.filterByShelterType(shelterList, filter);
    console.log(familyShelters)
    res.json({ shelters: familyShelters });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
