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
		  <div><p>Average population:</p>${PopulationAvg}</div>
      <div><p>Average Area:</p>${AreaAvg}</div>
      <div><p>Total number of countries:</p>${CountriesSum}</div>
      <div><p>Average population:</p>${BorderAvg}</div>
      
		`;

  const countryContainer = document.querySelector(".data-country");
  countryContainer.innerHTML = html;
  console.log(countryContainer);
};

document.addEventListener("DOMContentLoaded", fetchCountries);
