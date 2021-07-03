const getCountries = async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error("cannot fetch the data" );
  }

  return data;
};

getCountries()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected:", err.message));
