const countriesContainer = document.querySelector("tbody");
const header = document.querySelector("thead");
const searchEl = document.getElementById("search");
const container = document.querySelector(".container");
let url = "https://restcountries.eu/rest/v2/all";

//getting data

async function getCountries() {
  const response = await fetch(url);
  const countries = await response.json();

  displayCountries(countries);
  displayCountriesMobile(countries);
  minPopulation(countries);
  maxPopulation(countries);
  maxPopulationMobile(countries);
  maxPopulationMobile(countries);
  return countries;
}

document.addEventListener("DOMContentLoaded", async () => {
  let countries = [];

  try {
    countries = await getCountries();
  } catch (e) {
    console.log("error");
    console.log(e);
  }
});

//Content for Header

const ContentForHeader = {
  name: "Name",
  currency: "Currency",
  language: "Language",
  population: "Population",
  area: "Area",
  flag: "Flag",
};

const headerEl = document.createElement("tr");
headerEl.innerHTML = `
      <th>${ContentForHeader.name}</th>
      <th>${ContentForHeader.currency}</th>
      <th>${ContentForHeader.language}</th>
      <th>${ContentForHeader.population}</th>
      <th>${ContentForHeader.area}</th>
      <th>${ContentForHeader.flag}</th>
    `;
header.appendChild(headerEl);

//List of countries

function displayCountries(countries) {
  countries.forEach((country) => {
    const countryEl = document.createElement("tr");
    countryEl.classList.add("desktop");
    countryEl.innerHTML = `
        <td>${country.name}</td>
        <td>${country.currencies[0].name}</td>
        <td>${country.languages[0].name}</td>
        <td>${country.population}</td>
        <td>${country.area}</td>
        <td><img src='${country.flag}'  width='100px'></img></td>
  `;
    countriesContainer.appendChild(countryEl);
  });
}

//Mobile list of countries

function displayCountriesMobile(countries) {
  countries.forEach((country) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add("mobile");

    countryEl.innerHTML = `
        <img src='${country.flag}' width='100px'></img>
        <p>${country.name}</p>
        <p><strong>Currency</strong>${country.currencies[0].name}</p>
        <p><strong>Language</strong>${country.languages[0].name}</p>
        <p>${country.population}</p>
        <p><strong>Area</strong>${country.area}</p>

  `;

    container.appendChild(countryEl);
  });
}

//Search bar

function searchCountries() {
  let search = document.getElementById("search").value.toUpperCase();
  let tableRecord = document.getElementById("table");
  console.log(search);
  let tr = tableRecord.getElementsByClassName("desktop");

  for (let i = 0; i < tr.length; i++) {
    let displayStyle = "none";
    let td = tr[i].getElementsByTagName("td");
    for (let j = 0; j < td.length - 1; ++j) {
      if (td[j]) {
        let textvalue = td[j].textContent || td[j].innerText;
        if (textvalue.toUpperCase().indexOf(search) > -1) {
          displayStyle = "";
          break;
        }
      }
    }
    tr[i].style.display = displayStyle;
  }
}

//Mobile search bar

function searchCountriesMobile() {
  let search = document.getElementById("search").value.toUpperCase();
  let container = document.getElementById("container");

  let divEl = container.getElementsByTagName("div");

  for (let i = 0; i < divEl.length; i++) {
    let displayStyle = "none";
    let pEl = divEl[i].getElementsByTagName("p");
    for (let j = 0; j < pEl.length - 1; ++j) {
      if (pEl[j]) {
        let textvalue = pEl[j].textContent || pEl[j].innerText;
        if (textvalue.toUpperCase().indexOf(search) > -1) {
          displayStyle = "";
          break;
        }
      }
    }
    divEl[i].style.display = displayStyle;
  }
}
