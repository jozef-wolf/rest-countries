// desktop sorting

const desktop = function () {
  const getCellValue = (tr, idx) =>
    tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const table = th.closest("table");
      Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => table.appendChild(tr));
    })
  );
};

//mobile sorting

const mobile = function () {
  const getCellValueM = (div, idx) =>
    div.children[idx].innerText || div.children[idx].textContent;

  const comparerM = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValueM(asc ? a : b, idx),
      getCellValueM(asc ? b : a, idx)
    );

  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const container = th.closest(".container");
      Array.from(container.querySelectorAll("div:nth-child(n+2)"))
        .sort(
          comparerM(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((div) => container.appendChild(div));
    })
  );
};

if (window.matchMedia("(min-width: 768px)").matches) {
  console.log("Screen width is at least 768px");
  desktop();
} else {
  console.log("Screen less than 768px");
  mobile();
}
