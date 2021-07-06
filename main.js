const countriesContainer = document.querySelector("tbody");
const header = document.querySelector("thead");
const searchEl = document.getElementById("search");

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
  console.log(countries);
}

function displayCountries(countries) {
  countries.forEach((country) => {
    const countryEl = document.createElement("tr");
    countryEl.classList.add("searching");
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

function searchCountries() {
  let search = document.getElementById("search").value.toUpperCase();
  let tableRecord = document.getElementById("tableRecord");

  console.log(search);
  let tr = tableRecord.querySelectorAll("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].querySelectorAll("td")[0];

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
