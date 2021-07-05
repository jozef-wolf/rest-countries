const countriesContainer = document.querySelector(".container__table");
const header = document.querySelector(".container__header");

const ContentForHeader = {
  name: "Name",
  currency: "Currency",
  language: "Language",
  population: "Population",
  area: "Area",
  flag: "Flag",
};

const getCountries = async () => {
  let urlCountries = `
https://restcountries.eu/rest/v2/all
`;
  let templateCountries = "";
  let templateHeader = "";

  const response = await fetch(urlCountries);
  const countries = await response.json();

  templateHeader += `
    <div class="table__row table__row--header">
      <div class="table__cell">${ContentForHeader.name}</div>
      <div class="table__cell">${ContentForHeader.currency}</div>
      <div class="table__cell">${ContentForHeader.language}</div>
      <div class="table__cell">${ContentForHeader.population}</div>
      <div class="table__cell">${ContentForHeader.area}</div>
      <div class="table__cell">${ContentForHeader.flag}</div>
    </div>`;

  header.innerHTML = templateHeader;

  countries.map((country) => {
    templateCountries += `
    <div class="table__row">
      <div class="table__cell">${country.name}</div>
      <div class="table__cell">${country.currencies[0].name}</div>
      <div class="table__cell">${country.languages}</div>
      <div class="table__cell">${country.population}</div>
      <div class="table__cell">${country.area}</div>
      <img src='${country.flag}' class="table__cell" width='100px'></img>
    </div>`;
  });

  countriesContainer.innerHTML = templateCountries;

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  return countries;
};

getCountries()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected:", err.message));

window.addEventListener("DOMContentLoaded", () => getCountries());
