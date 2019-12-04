const readInput = require("./helpers");
const fs = require("fs").promises;

async function fuelConsumption() {
  try {
    const massList = await readInput.readInput(1);

    const massArr = massList.match(/[0-9]+/g).map(massStr => parseInt(massStr));

    let sum = 0;

    massArr.forEach(mass => {
      let consumption = calculate(mass);
      sum += consumption;
      // remove this while loop for the solution to puzzle 1
      while (calculate(consumption) > 0) {
        consumption = calculate(consumption);
        sum += consumption;
      }
    });
    console.log(sum);
    await fs.writeFile(`${__dirname}/output/d01p02.txt`, sum);
  } catch (err) {
    console.error(err);
  }
}

function calculate(mass) {
  return Math.floor(mass / 3) - 2;
}

fuelConsumption();
