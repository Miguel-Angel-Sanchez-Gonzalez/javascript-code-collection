// Solución al ejercicio de Exercism: "Difference of square"
// Enunciado tomado de Exercism.org

export class Squares {
  constructor(number) {
    if (typeof number !== "number" || number < 0) {
      throw new Error("Input must be a non-negative integer");
    }
    this.number = number;
  }

  get sumOfSquares() {
    let result = 0;
    for (let index = 1; index <= this.number; index++) {
      result += index * index;
    }
    return result;
  }

  get squareOfSum() {
    let result = 0;
    for (let index = 1; index <= this.number; index++) {
      result += index;
    }

    return result * result;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

// Test cases
const squares5 = new Squares(5);
console.log(squares5.squareOfSum);
console.log(squares5.sumOfSquares);
console.log(squares5.difference);
