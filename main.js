const countriesContainer = document.querySelector(".container__table");

const getCountries = async () => {
  let urlCountries = `
https://restcountries.eu/rest/v2/all

`;
  let templateCountries = "";

  const response = await fetch(urlCountries);
  const countries = await response.json();

  countries.forEach((country) => {
    templateCountries += `<div>${country.name}</div>
    <div>${country.currencies[0].name}</div>
    <div>${country.languages}</div>
    <div>${country.population}</div>
    <div>${country.area}</div>
    <div><img src='${country.flag}'></img></div>`;
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

const mappedContentForHeader = {
  name: "Name",
  currency: "Currency",
  language: "Language",
  population: "Population",
  area: "Area",
  flag: "Flag",
};
