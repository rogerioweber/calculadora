const readline = require("readline");

const { divisao, multiplicacao, soma, subtracao } = require("./calcs/calcs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let resultado = 0;

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite uma das operações válidas (+, -, *, /): ", (operacao) => {
    rl.question("Digite o segundo número: ", (num2) => {
      switch (operacao) {
        case "+":
          resultado = soma(Number(num1), Number(num2));
          console.log(`${num1} + ${num2} = ${resultado}`);
          break;
        case "-":
          resultado = subtracao(Number(num1), Number(num2));
          console.log(`${num1} - ${num2} = ${resultado}`);
          break;
        case "*":
          resultado = multiplicacao(Number(num1), Number(num2));
          console.log(`${num1} x ${num2} = ${resultado}`);
          break;
        case "/":
          if (num2 === "0") {
            console.log("Não existe divisão por 0");
            break;
          }
          resultado = divisao(Number(num1), Number(num2));
          console.log(`${num1} / ${num2} = ${resultado}`);
          break;
        default:
          console.log("Erro, digite uma das operações válida");
          break;
      }
      rl.close();
    });
  });
});
