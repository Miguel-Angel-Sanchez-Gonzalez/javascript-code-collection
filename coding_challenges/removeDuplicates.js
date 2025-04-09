// Escribe una función que reciba un array de números (o strings) y devuelva un nuevo array sin elementos duplicados.

function removeDuplicates(arr) {

let copia = [...arr];

  for (let index = 0; index < arr.length; index++) {  
      for (let index2 = index + 1; index2 < arr.length; index2++) {
        if (arr[index] === arr[index2]) {
          copia.splice(arr[index2], 1)
        }
      }
    }
  return copia
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, , 5 , 5]));