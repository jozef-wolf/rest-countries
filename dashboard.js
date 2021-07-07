function averagePopulation(countries) {
  const sum = countries.reduce((acc, country) => acc + country.population, 0);
  const avg = sum / countries.length;
  console.log(avg);
  return avg;
}
function averageArea(countries) {
  const sum = countries.reduce((acc, country) => acc + country.area, 0);
  const avg = sum / countries.length;
  console.log(avg);
  return avg;
}
function numberOfCountries(countries) {
  console.log(countries.length);
  return countries.length;
}
function averageBorders(countries) {
  const sum = countries.reduce(
    (acc, country) => acc + country.borders.length,
    0
  );
  const avg = sum / countries.length;
  console.log(avg);
  return avg;
}
