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

async function getCountries() {
  const res = await fetch(url);
  const countries = await res.json();

  displayCountries(countries);
  displayCountriesMobile(countries);
  minPopulation(countries);
  maxPopulation(countries);
  console.log(countries);
}

getCountries();

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

    countryEl.innerHTML = `
        <div><img src='${country.flag}' width='100px'></img></div>
        <p>${country.name}</p>
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
  let tableRecord = document.getElementById("table");
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

function searchCountriesMobile() {
  let search = document.getElementById("search").value.toUpperCase();
  let container = document.getElementById("container");

  let divEl = container.getElementsByTagName("div");

  for (let i = 0; i < divEl.length; i++) {
    let pEl = divEl[i].getElementsByTagName("p")[0];
    console.log(pEl);

    if (pEl) {
      let textvalue = pEl.textContent || pEl.innerText;
      if (textvalue.toUpperCase().indexOf(search) > -1) {
        divEl[i].style.display = "";
      } else {
        divEl[i].style.display = "none";
      }
    }
  }
}

function maxPopulation() {
  let search = document.getElementById("search-max").value;
  let tableRecord = document.getElementById("table");
  console.log(search);
  let tr = tableRecord.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      let textvalue = td.textContent || td.innerText;
      let textToNumber = parseInt(textvalue);
      let searchToNumber = parseInt(search);
      console.log(textToNumber, searchToNumber);
      if (searchToNumber > textToNumber || isNaN(searchToNumber)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

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
      console.log(textToNumber, searchToNumber);
      if (searchToNumber < textToNumber || isNaN(searchToNumber)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
