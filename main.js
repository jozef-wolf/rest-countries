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

searchEl.addEventListener("input", (e) => {
  const val = e.target.value;
  console.log(val);
});

// const getCountries = async () => {
//   let urlCountries = `
// https://restcountries.eu/rest/v2/all
// `;
//   let templateCountries = "";
//

//   const response = await fetch(urlCountries);
//   const countries = await response.json();

//   countries.map((country) => {
//     templateCountries += `
//     <tbody>
//     <tr>
//
//       </tr>
//     </tbody>`;
//   });

//   countriesContainer.innerHTML = templateCountries;

//   if (response.status !== 200) {
//     throw new Error("cannot fetch the data");
//   }

//   return countries;
// };

// getCountries()
//
