export const getDataCodes = async (codes) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${codes[0]};${codes[1]};${codes[2]};${codes[3]}`
  );
  const json = await res.json();
  return json;
};
