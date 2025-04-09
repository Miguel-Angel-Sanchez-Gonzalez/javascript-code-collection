// Escribe una función que reciba un array de números (o strings) y devuelva un nuevo array sin elementos duplicados.

function removeDuplicates(arr) {
  const result = []

  for (let index = 0; index < arr.length; index++) {
    if (!result.includes(arr[index])) {
      result.push(arr[index])
    }
  }

  return result
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5 , 5 , 5]));