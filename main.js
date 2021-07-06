const countriesContainer = document.querySelector("tbody");
const header = document.querySelector("thead");
const searchEl = document.getElementById("search");
const container = document.querySelector(".container");
let url = "https://restcountries.eu/rest/v2/all";

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

getCountries();

async function getCountries() {
  const res = await fetch(url);
  const countries = await res.json();

  displayCountries(countries);
  displayCountriesMobile(countries);
  console.log(countries);
}

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

function displayCountriesMobile(countries) {
  countries.forEach((country) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add("mobile");
    console.log(countryEl);
    countryEl.innerHTML = `
        <div><img src='${country.flag}' width='100px'></img></div>
        <h2>${country.name}</h2>
        <p><strong>Currency:</strong> ${country.currencies[0].name}</p>
        <p><strong>Language:</strong> ${country.languages[0].name}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Area:</strong> ${country.area}</p>
        
  `;
    container.appendChild(countryEl);
  });
}

function searchCountries() {
  let search = document.getElementById("search").value.toUpperCase();
  let tableRecord = document.getElementById("tableRecord");

  console.log(search);
  let tr = tableRecord.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    console.log(td);

    if (td) {
      let textvalue = td.textContent || td.innerText;
      if (textvalue.toUpperCase().indexOf(search) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
