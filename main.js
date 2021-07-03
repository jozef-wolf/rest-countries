const getCountries = async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();

  return data;
};

getCountries()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("resolved:", err.message));
