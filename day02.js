const helpers = require("./helpers");

async function intcode() {
  try {
    let input = await helpers.readInput(2);
    input = input.split(",").map(elem => parseInt(elem));
    let output = [];
    let noun, verb;
    while (output[0] !== 19690720) {
      noun = Math.floor(Math.random() * 100);
      verb = Math.floor(Math.random() * 100);
      input[1] = noun; //45
      input[2] = verb; //59
      // array is processed in chunks of 4

      output = calculate(input);
      console.log(output[0]);
    }

    console.log(100 * noun + verb);

    // console.log(input.join(","));
  } catch (err) {
    console.error(err);
  }
}

function calculate(input) {
  let output = input.slice();
  for (let index = 0; index < output.length; index += 4) {
    let opcode = output[index];
    let operand1 = output[index + 1];
    let operand2 = output[index + 2];
    let result = output[index + 3];
    if (opcode == 1) {
      // add
      output[result] = output[operand1] + output[operand2];
    } else if (opcode == 2) {
      // multiply
      output[result] = output[operand1] * output[operand2];
    } else {
      // abort
      break;
    }
  }
  return output;
}

intcode();
