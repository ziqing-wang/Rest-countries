import { async } from "regenerator-runtime";
import { getJSON } from './helpers.js'

export const state = {
    country: {},
    // regions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    searchResults: []
}

export const loadSearchResults = function (country) {

}

export const loadCountry = async function () {
    const data = await getJSON('https://restcountries.com/v2/name/japan');
    console.log(data);
}