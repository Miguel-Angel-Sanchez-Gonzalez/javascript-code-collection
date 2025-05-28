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
    const n = this.number;
    return (n * (n + 1) * (2 * n + 1)) / 6; // Fórmula: suma de los primeros n cuadrados: n(n+1)(2n+1)/6
  }

  get squareOfSum() {
    const sum = (this.number * (this.number + 1)) / 2; // Fórmula: suma de los primeros n números: n(n+1)/2
    return sum * sum;
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
