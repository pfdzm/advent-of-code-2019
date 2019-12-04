const axios = require("axios");
const dotenv = require("dotenv");
const fs = require("fs").promises;

// allow input to be downloaded from terminal
// usage 'node helpers.js [dayNumber]'
if (process.argv.length > 2) {
  const day = process.argv[2];
  fetchInput(day);
}

// helper function to download input data each day
async function fetchInput(day) {
  try {
    // load .env variables
    dotenv.config();
    const response = await axios.get(
      `https://adventofcode.com/2019/day/${day}/input`,
      {
        headers: {
          Cookie: `session=${process.env.SESSION}`
        }
      }
    );
    console.log("data fetched");
    const filename = day > 9 ? `${day}` : `0${day}`;
    await fs.writeFile(`${__dirname}/input/${filename}.txt`, response.data);
    console.log("data saved to file");
  } catch (err) {
    console.error(err);
  }
}

// helper function to read input data each day
async function readInput(day) {
  try {
    const filename = day > 9 ? `${day}` : `0${day}`;
    return await fs.readFile(`${__dirname}/input/${filename}.txt`, {
      encoding: "utf8"
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { fetchInput, readInput };
