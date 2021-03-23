const axios = require('axios')
const cheerio = require('cheerio')

function Shelter(name, address, number, description) {
    this.name = name;
    this.address = address;
    this.number = number;
    this.description = description;
}

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/ |(\%20)/g, '+');
}

function filterByShelterType(shelterList, filter = 'family') {
    if (filter == 'none') return shelterList;
    const famMatch = /(family)|(children)|(youth)/ig;
    // REVIEW: is || null needed here?
    shelterList.filter((shelter) => {
        return Boolean(shelter.description.match(famMatch) || 
                       shelter.name.match(famMatch) || 
                       false); 
    });
    return shelterList;
}

const HSD_SEARCH = 'https://www.homelessshelterdirectory.org/cgi-bin/widgets/shelters.cgi?'
async function getHSDShelters(city, state) {
    try {
        const { data } = await axios.get(
            HSD_SEARCH + `city=${fixedEncodeURIComponent(city)}` + `&state=${fixedEncodeURIComponent(state)}`
        );

        console.log(HSD_SEARCH + `city=${fixedEncodeURIComponent(city)}` + `&state=${fixedEncodeURIComponent(state)}`);

        const $ = cheerio.load(data);
        const shelterNames = [];

        $('div.tabRow').each((i, entry) => {
            const shelter = $(entry).children();

            const name = $(shelter[0]).text().trim();
            const address = $(shelter[1]).text().trim();
            const number = $(shelter[2]).text().trim();

            const fullText = $(entry).text();
            const idx = fullText.indexOf(number || address || name) + number.length;
            const description = fullText.substring(idx).trim();
            
            const shelterInfo = new Shelter(name, address, number, description);

            shelterNames.push(shelterInfo);
        });

        return shelterNames;
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = { Shelter, filterByShelterType, getHSDShelters};
