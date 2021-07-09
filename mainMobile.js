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

//max population

function maxPopulationMobile() {
  let search = document.getElementById("search-max").value;
  let tableRecord = document.getElementById("container");

  let tr = tableRecord.getElementsByClassName("mobile");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("p")[3];

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

function minPopulationMobile() {
  let search = document.getElementById("search-min").value;
  let tableRecord = document.getElementById("container");

  let tr = tableRecord.getElementsByClassName("mobile");
  console.log(tr);
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("p")[3];

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
