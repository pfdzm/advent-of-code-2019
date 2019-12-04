const readInput = require("./helpers");

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
  } catch (err) {
    console.error(err);
  }
}

calcFuelComsumption();
