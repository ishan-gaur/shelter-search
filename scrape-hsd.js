const axios = require('axios')
const cheerio = require('cheerio')

const HSD_BY_CITY = 'https://www.homelessshelterdirectory.org/cgi-bin/id/city.cgi?'
const getShelters = async (city, state) => {
    try {
        const { data } = await axios.get(
            HSD_BY_CITY + `city=${encodeURIComponent(city)}` + `&state=${encodeURIComponent(state)}`
        );

        const $ = cheerio.load(data);
        const shelterNames = [];

        $('div.layout_post_2.clearfix > div.item_content > h4 > a').each((i, shelter) => {
            const name = $(shelter).text();
            shelterNames.push(name);
        });
        return shelterNames;
    }
    catch (error) {
        throw error;
    }
};

let city = 'Los Angeles'
let state = 'CA'
getShelters(city, state).then((shelterNames) => console.log(shelterNames)).catch((error) => console.log(error));
