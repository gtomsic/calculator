const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('What would you like to calculate?', function (input) {
  const tokens = input.split(' ');

  mathSymbol = tokens[0];
  num1 = Number(tokens[1]);
  num2 = Number(tokens[2]);

  if (mathSymbol === 'x') {
    console.log(`Answer: ${num1 * num2}`);
  } else if (mathSymbol === '/') {
    console.log(`Answer: ${num1 / num2}`);
  } else if (mathSymbol === '-') {
    console.log(`Answer: ${num1 - num2}`);
  }
  reader.close();
});
