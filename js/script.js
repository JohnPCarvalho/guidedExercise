//Application initial 'state'

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  //mapear os elementos do DOM
  tabCountries = document.querySelector("#tabCountries");
  tabFavotires = document.querySelector("#tabFavorites");
  countCountries = document.querySelector("#countCountries");
  countFavorites = document.querySelector("#countFavorites");
  totalPopulationList = document.querySelector("#totalPopulationList");

  totalPopulationFavorites = 
    document.querySelector("#totalPopulationFavorites");

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
});

function fetchCountries() {
  console.log('fetching...');
}
