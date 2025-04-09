// Ejercicio: FizzBuzz
// Escribe una función que recorra los números del 1 al 100 y que:
// Imprima "Fizz" si el número es múltiplo de 3.
// Imprima "Buzz" si el número es múltiplo de 5.
// Imprima "FizzBuzz" si el número es múltiplo de 3 y de 5.
// Si no es múltiplo ni de 3 ni de 5, imprime el número.

function FizzBuzz() {
  for (let index = 1; index <= 100; index++) {
    console.log(isMultiple(index));
  }
}

function isMultiple(num) {
  if ((num % 3) === 0 && (num % 5) === 0) return "FizzBuzz"
  if ((num % 3) === 0) return "Fizz"
  if ((num % 5) === 0) return "Buzz"
  
  return num
}

FizzBuzz();