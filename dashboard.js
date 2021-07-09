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
		  <div><p><strong>Average population: </strong>${PopulationAvg}<i class="fas fa-users"></i></p></div>
      <div><p><strong>Average Area: </strong>${AreaAvg}<i class="fas fa-chart-area"></i></p></div>
      <div><p><strong>Total number of countries: </strong>${CountriesSum}<i class="fas fa-globe-americas"></i></p></div>
      <div><p><strong>Average number of neighbours: </strong>${BorderAvg}<i class="fas fa-home"></i></p></div>
      
		`;

  const countryContainer = document.querySelector(".data-country");
  countryContainer.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", fetchCountries);
