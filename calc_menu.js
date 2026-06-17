const { intro, text, select, outro } = require("@clack/prompts");

const { soma, subtracao, multiplicacao, divisao } = require("./calcs/calcs");

async function calculadora() {
  intro("Calculadora");

  const operacao = await select({
    message: "Escolha uma operação: ",
    options: [
      { value: "Soma", label: "Soma" },
      { value: "Subtração", label: "Subtração" },
      { value: "Multiplicação", label: "Multiplicação" },
      { value: "Divisão", label: "Divisão" },
      { value: "Sair", label: "Sair" },
    ],
  });
  if (operacao === "Sair") {
    console.log("Calculadora encerrada");
    return;
  }

  let num1;
  while (isNaN(num1)) {
    const resposta = await text({
      message: `Digite o primeiro número da operação de ${operacao} :`,
    });
    num1 = Number(resposta);
  }

  let num2;
  while (isNaN(num2)) {
    const resposta2 = await text({
      message: `Digite o segundo número da operação de ${operacao} :`,
    });
    num2 = Number(resposta2);
  }

  let resultado;

  switch (operacao) {
    case "Soma":
      resultado = soma(num1, num2);
      console.log(`${num1} + ${num2} = ${resultado}`);
      return calculadora();
    case "Subtração":
      resultado = subtracao(num1, num2);
      console.log(`${num1} - ${num2} = ${resultado}`);
      return calculadora();
    case "Multiplicação":
      resultado = multiplicacao(num1, num2);
      console.log(`${num1} * ${num2} = ${resultado}`);
      return calculadora();
    case "Divisão":
      if (num2 === 0) {
        console.log("Não existe divisão por 0");
        return calculadora();
      }

      resultado = divisao(num1, num2);
      console.log(`${num1} / ${num2} = ${resultado}`);
      return calculadora();

    default:
      console.log("Operação inválida");
      return calculadora();
  }
}

calculadora();
