const countriesContainer = document.querySelector("tbody");
const searchEl = document.getElementById("search");
const container = document.querySelector(".container");
let url = "https://restcountries.com/v3.1/all";

//async await - getting data

async function getCountries() {
  const response = await fetch(url);
  const countries = await response.json();
  displayCountriesMobile(countries);
  displayCountries(countries);
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
      <th class="arrow-down" onclick="this.classList.toggle('active')">${ContentForHeader.name}</th>
      <th class="arrow-down" onclick="this.classList.toggle('active')">${ContentForHeader.currency}</th>
      <th class="arrow-down" onclick="this.classList.toggle('active')">${ContentForHeader.language}</th>
      <th class="arrow-down" onclick="this.classList.toggle('active')">${ContentForHeader.population}</th>
      <th class="arrow-down" onclick="this.classList.toggle('active')">${ContentForHeader.area}</th>
      <th>${ContentForHeader.flag}</th>
    `;
countriesContainer.appendChild(headerEl);

//List of countries

function displayCountries(countries) {
  countries.forEach((country) => {
    const countryEl = document.createElement("tr");
    countryEl.classList.add("desktop");
    countryEl.innerHTML = `
        <td>${country.name.common}</td>
        <td>${Object.keys(country.currencies)}</td>
        <td>${Object.keys(country.languages)}</td>
        <td>${country.population}</td>
        <td>${country.area}</td>
        <td><img src='${country.flags.png}'  width='100px'></img></td>
  `;
    countriesContainer.appendChild(countryEl);
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

//max population

function maxPopulation() {
  let search = document.getElementById("search-max").value;
  let tableRecord = document.getElementById("table");

  let tr = tableRecord.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      let textvalue = td.textContent || td.innerText;
      let textToNumber = parseInt(textvalue);
      let searchToNumber = parseInt(search);

      if (searchToNumber > textToNumber || isNaN(searchToNumber)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//min population

function minPopulation() {
  let search = document.getElementById("search-min").value;
  let tableRecord = document.getElementById("table");

  let tr = tableRecord.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      let textvalue = td.textContent || td.innerText;
      let textToNumber = parseInt(textvalue);
      let searchToNumber = parseInt(search);

      if (searchToNumber < textToNumber || isNaN(searchToNumber)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
