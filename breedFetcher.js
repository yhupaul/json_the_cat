const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
      return;
      //console.log("error");
    }

    if (!data[0]) {
      callback(`The requseted ${breedName} is not found`, null);
      return;
    }

    callback(null, data[0].description);
    //console.log(data[0].description);

  });
};



module.exports = { fetchBreedDescription };
