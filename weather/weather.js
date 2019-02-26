const request = require("request");

const getWeather = (lat, lon, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${
        process.env.W_KEY
      }/${lat},${lon}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to Forecast.io server");
      } else if (response.statusCode === 400) {
        callback("Unable to fetch weather");
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    }
  );
};

module.exports.getWeather = getWeather;
