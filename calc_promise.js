const readline = require("readline");

const { soma, subtracao, multiplicacao, divisao } = require("./calcs/calcs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => {
      resolve(resposta);
    });
  });
}

async function calculadora() {
  let num1;
  while (isNaN(num1)) {
    const resposta = await perguntar("Digite o primeiro número: ");
    num1 = Number(resposta);
  }

  let operation = false;
  let operacao;
  while (operation === false) {
    operacao = await perguntar("Digite uma das operações (+, -, /, *): ");
    if (
      operacao === "+" ||
      operacao === "-" ||
      operacao === "*" ||
      operacao === "/"
    ) {
      operation = true;
    }
  }

  let num2;
  while (isNaN(num2)) {
    const resposta = await perguntar("Digite o segundo número: ");
    num2 = Number(resposta);
  }

  let resultado;

  switch (operacao) {
    case "+":
      resultado = soma(num1, num2);
      console.log(`${num1} + ${num2} = ${resultado}`);
      break;
    case "-":
      resultado = subtracao(num1, num2);
      console.log(`${num1} - ${num2} = ${resultado}`);
      break;
    case "*":
      resultado = multiplicacao(num1, num2);
      console.log(`${num1} * ${num2} = ${resultado}`);
      break;
    case "/":
      if (num2 === 0) {
        console.log("Não existe divisão por 0");
        break;
      }

      resultado = divisao(num1, num2);
      console.log(`${num1} / ${num2} = ${resultado}`);
      break;

    default:
      console.log("Operação inválida");
      break;
  }

  rl.close();
}

calculadora();
