/*
    Programação para Internet - 2026
    Professor: Guilherme Leal
*/

// Ativar o formatador Prettier
// ALT + SHIFT + F

// # Aula 06/05 - Introdução a JavaScript

console.log("Bem vindo a PPI!");

// Variáveis
let name = "João";
let age = 17;
let isStudent = true;

const PI = 3.14; // Não pode mudar de valor
console.log(PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // soma
let y = "5" + 5; // concatenação
let z = "Hello" + 5;

console.log(x ** 2, y, z); // ** potência
console.log(typeof x);

// Operadores relacionais
console.log("5" != 5); // Diferença
console.log("5" == 5); // Compara tipo OU valor
console.log("5" === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // incremento após o retorno do valor
console.log(x);
console.log(++x); // incremento antes do retorno do valor
let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression);

//if...else
//if (condition) {
//condition = verdadeira

//} else {
//condition = falsa

//}

//template strings
let labubu = `amo programar
em javascript
é muito legal!`;
console.log(labubu);

//for (let index=0; index<Array.length; index++) {
//    const element = array[index];
//}

//array
let fruits = ["banana", "orange", "apple", "mango"];

console.log(fruits.lenght); // tamanho

console.log(fruits[0]);

fruits.push("kiwi");
console.log(fruits);

console.log(fruits.pop()); // remove o último elemento
console.log(fruits);

console.log(fruits.shift()); // remove o primeiro elemento
console.log(fruits);

fruits.unshift("lemon"); // adiciona um elemento no início do array
console.log(fruits);

fruits.splice(2, 0, "kiwi", "blueberry"); // argumento 1 - posição, argumento 2 - quantidade de elementos a remover, argumento 3 - elemento a adicionar
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

fruits.splice(3, 1, "kiwi");
console.log(fruits);

let index = fruits.indexOf("kiwi");
console.log(index);

fruits.splice(index, 1, "apple");
console.log(fruits);

console.log("sort/reverse");
fruits.sort(); // ordena o array em ordem alfabética
console.log(fruits);

//ordem decrscente
fruits.reverse();
console.log(fruits);

let fruitsSort = fruits.toSorted();
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed();
console.log(fruits);
console.log(fruitsReverse);

const numbers = [45, 4, 9, 16, 25];
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2);
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));
console.log(numbers.toSorted((a, b) => a - b));
console.log(numbers.toSorted((a, b) => b - a));

numbers.sort((a, b) => a - b);
console.log('maior =', numbers[numbers.length - 1]); // maior número
console.log(numbers[0]); // menor número
