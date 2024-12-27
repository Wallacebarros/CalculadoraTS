import { Operador } from "./types";

const numeros = document.querySelectorAll('.numeros');
const operadores = document.querySelectorAll('.operadores');
const igualdade = document.querySelector('#igualdade') as HTMLButtonElement;
const limpar = document.querySelector('#resetar') as HTMLButtonElement;
const apagar = document.querySelector('#apagar') as HTMLButtonElement;
const input = document.querySelector('#input') as HTMLInputElement;

const fatores: Array<number> = [];
const operacoes: Array<Operador> = [];

numeros.forEach(numero => {
  numero.addEventListener('click', () => {
    input.value += numero.textContent;
  });
});

operadores.forEach(operador => {
  operador.addEventListener('click', () => {
    fatores.push(Number(input.value));
    operacoes.push(operador.textContent as Operador);
    input.value = '';
  });
});

igualdade.addEventListener('click', () => {
    fatores.push(Number(input.value));
    input.value = calcular().toString();
    fatores.length = 0;
    operacoes.length = 0;
});

limpar.addEventListener('click', () => {

    input.value = '';
    fatores.length = 0;
    operacoes.length = 0;
});

function calcular() {
    let resultado = fatores[0];
    for (let i = 0; i < operacoes.length; i++) {
        switch (operacoes[i]) {
            case "+" : resultado += fatores[i + 1]; break;
            case "-" : resultado -= fatores[i + 1]; break;
            case "x" : resultado *= fatores[i + 1]; break;
            case "/" : resultado /= fatores[i + 1]; break;
        }
    }
    return resultado;
}
apagar.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});