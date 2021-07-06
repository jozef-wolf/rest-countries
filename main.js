const countriesContainer = document.querySelector("tbody");
const header = document.querySelector("thead");

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
    <thead>
    <tr>
      <th>${ContentForHeader.name}</th>
      <th>${ContentForHeader.currency}</th>
      <th>${ContentForHeader.language}</th>
      <th>${ContentForHeader.population}</th>
      <th>${ContentForHeader.area}</th>
      <th>${ContentForHeader.flag}</th>
    </tr>
    </thead>`;

  header.innerHTML = templateHeader;

  countries.map((country) => {
    templateCountries += `
    <tbody>
    <tr>
      <td>${country.name}</td>
      <td>${country.currencies[0].name}</td>
      <td>${country.languages[0].name}</td>
      <td>${country.population}</td>
      <td>${country.area}</td>
      <td><img src='${country.flag}'  width='100px'></img></td>
      </tr>
    </tbody>`;
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
