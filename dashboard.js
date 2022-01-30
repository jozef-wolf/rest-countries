const dashContainer = document.getElementsByClassName("main");

// fetch - getting data

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  console.log(countries);
  rendercountriesInfo(countries);
  return countries;
}

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((countires) => rendercountriesInfo(countries))
//   .catch((err) => console.log("Error:", err.message));

const getAverage = function (average) {};

const rendercountriesInfo = (countries) => {
  const CountriesNumber = countries.length;
  let html = ``;
  const PopulationSum = countries.reduce(
    (acc, country) => acc + country.population,
    0
  );
  const PopulationAvg = PopulationSum / CountriesNumber;

  const AreaSum = countries.reduce((acc, country) => acc + country.area, 0);
  const AreaAvg = AreaSum / CountriesNumber;

  const CountriesSum = CountriesNumber;

  html += `
		  <div><p><strong>Average population</strong></br>${PopulationAvg}<i class="fas fa-users"></i></p></div>
      <div><p><strong>Average Area</strong></br>${AreaAvg}<i class="fas fa-chart-area"></i></p></div>
      <div><p><strong>Total number of countries</strong></br>${CountriesSum}<i class="fas fa-globe-americas"></i></p></div>
      
		`;

  const countryContainer = document.querySelector(".wrapper__data");
  countryContainer.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", getCountries());
