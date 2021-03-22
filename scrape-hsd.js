const axios = require('axios')
const cheerio = require('cheerio')

function Shelter(name, address, number, description) {
    this.name = name;
    this.address = address;
    this.number = number;
    this.description = description;
}

const HSD_SEARCH = 'https://www.homelessshelterdirectory.org/cgi-bin/widgets/shelters.cgi?'
async function getShelters(city, state) {
    try {
        const { data } = await axios.get(
            HSD_SEARCH + `city=${encodeURIComponent(city)}` + `&state=${encodeURIComponent(state)}`
        );

        const $ = cheerio.load(data);
        const shelterNames = [];

        $('div.tabRow').each((i, entry) => {
            const shelter = $(entry).children();
            const name = $(shelter[0]).text().trim();
            const address = $(shelter[1]).text().trim();
            const number = $(shelter[2]).text().trim();
            let description = '';
            shelter.each((i, line) => {
                if (i < 3) return;
                description += '\n' + $(line).text();
            });
            description = description.trim();
            let shelterInfo = new Shelter(name, address, number, description);
            shelterNames.push(shelterInfo);
        });

        return shelterNames;
    }
    catch (error) {
        throw error;
    }
};

function testScraping() {
    let city = 'Sacramento';
    let state = 'CA';
    getShelters(city, state)
        .then((shelterNames) => console.log(shelterNames))
        .catch((error) => console.log(error));
}

module.exports = { getShelters };

testScraping();
