// * XMLHttpRequest - XHR
// ! old way, not common anymore

const getCountryDataXHR = (country, className = '') => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `
  https://restcountries.com/v3.1/name/${country}`
  );
  request.send();

  request.addEventListener('load', function () {
    console.log(JSON.parse(this.responseText));
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data, className);
  });
};

// getCountryDataXHR('turkey');
