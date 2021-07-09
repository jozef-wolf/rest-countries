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
