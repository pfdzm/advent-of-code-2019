const readInput = require("./helpers");
const fs = require("fs").promises;

async function calcFuelComsumption() {
  try {
    const massList = await readInput.readInput(1);

    const massArr = massList.match(/[0-9]+/g).map(massStr => parseInt(massStr));

    let sum = 0;

    massArr.forEach(mass => {
      const consumption = Math.floor(mass / 3) - 2;
      sum += consumption;
    });
    console.log(sum);
    await fs.writeFile(`${__dirname}/output/d01p01.txt`, sum);
  } catch (err) {
    console.error(err);
  }
}

calcFuelComsumption();
