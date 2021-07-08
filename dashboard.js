const dashContainer = document.getElementsByClassName("main");

function averageBorders(countries) {
  console.log(avg);
  return;
}

const fetchCountries = () => {
  const url = "https://restcountries.eu/rest/v2/all";
  fetch(url)
    .then((res) => res.json())
    .then((countries) => rendercountriesInfo(countries));
};

const rendercountriesInfo = (countries) => {
  let html = ``;
  const PopulationSum = countries.reduce(
    (acc, country) => acc + country.population,
    0
  );
  const PopulationAvg = PopulationSum / countries.length;

  const AreaSum = countries.reduce((acc, country) => acc + country.area, 0);
  const AreaAvg = AreaSum / countries.length;

  const CountriesSum = countries.length;

  const BorderSum = countries.reduce(
    (acc, country) => acc + country.borders.length,
    0
  );
  const BorderAvg = BorderSum / countries.length;

  html += `
		  <div><p><strong>Average population: </strong></p>${PopulationAvg}<i class="fas fa-users"></i></div>
      <div><p><strong>Average Area: </strong></p>${AreaAvg}<i class="fas fa-chart-area"></i></div>
      <div><p><strong>Total number of countries: </strong></p>${CountriesSum}<i class="fas fa-globe-americas"></i></div>
      <div><p><strong>Average number of neighbours: </strong></p>${BorderAvg}<i class="fas fa-home"></i></div>
      
		`;

  const countryContainer = document.querySelector(".data-country");
  countryContainer.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", fetchCountries);
