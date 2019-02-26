const dotenv = require("dotenv").config();
const request = require("request");
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Addtrdd to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${
      process.env.KEY
    }`,
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);
