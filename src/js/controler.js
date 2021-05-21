// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';
import * as model from './model.js';

const dropdownBtn = document.querySelector('.btn--filter')
const listContainer = document.querySelector('.option-list')
const searchInput = document.querySelector('.search')

const showOptions = function () {
    listContainer.classList.toggle('hidden')
}

dropdownBtn.addEventListener('click', showOptions)
searchInput.addEventListener('submit', e => {
    e.preventDefault();
    console.log('submit');
})



const init = () => {
    model.loadCountry();
}
init();