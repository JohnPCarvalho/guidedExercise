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

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map(country => {
    //array destructuring
    const {numericCode, translations, population, flag } = country;
    //returns an object with the named properties above
    return  {
    id: numericCode,
    name: translations.pt,
    population,
    flag
  };
});
  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  console.log('rendering...');
  let countriesHTML = "<div class='countries'>";

  allCountries.forEach(country => {
    const { name, flag, id, population } = country;

    const countryHTML = `
    <div class='country'>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      </div>
    `
  })
}
function renderFavorites() {}
function renderSummary() {}
function handleCountryButtons() {}