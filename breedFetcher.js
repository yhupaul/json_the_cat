const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log(`The requseted ${breedName} is not found`);
    } else {
      callback(null, data[0].description);
      // console.log(data[0].description);
    }
    if (error) {
      callback(error, null);
    //console.log("error");
    }
  });
};



module.exports = { fetchBreedDescription };
