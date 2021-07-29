const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`The requseted ${breed} is not found`);
  } else {
    console.log(data[0].description);
  }
  if (error) {
    console.log("error");
  }

});