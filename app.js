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
    const familyShelters = []
    const famMatch = /(family)|(children)|(youth)/ig;
    for (let i = 0; i < shelterList.length; i++) {
        let found = (shelterList[i].description.match(famMatch) || shelterList[i].name.match(famMatch));
        if (found == null) continue;
        familyShelters.push(shelterList[i].name);
    }
    // let finish = performance.now();
    // console.log(finish - start);
    res.send(familyShelters);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
