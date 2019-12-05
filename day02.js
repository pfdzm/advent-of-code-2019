const helpers = require("./helpers");

async function intcode() {
  try {
    let input = await helpers.readInput(2);
    input = input.split(",").map(elem => parseInt(elem));
    // array is processed in chunks of 4
    for (let index = 0; index < input.length; index += 4) {
      let opcode = input[index];
      let operand1 = input[index + 1];
      let operand2 = input[index + 2];
      let result = input[index + 3];
      if (opcode == 1) {
        // add
        input[result] = input[operand1] + input[operand2];
      } else if (opcode == 2) {
        // multiply
        input[result] = input[operand1] * input[operand2];
      } else {
        // abort
        break;
      }
    }
    console.log(input.join(","));
  } catch (err) {
    console.error(err);
  }
}

intcode();
