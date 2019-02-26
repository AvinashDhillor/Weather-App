const dotenv = require(dotenv).config();
const request = require("request");

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%lombard%street%philadelphia&key=${prcoessKEY}`,
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);
