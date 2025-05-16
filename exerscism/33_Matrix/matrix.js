// Solución al ejercicio de Exercism: "Matrix"
// Enunciado tomado de Exercism.org

export class Matrix {
  constructor(string) {
    this.data = string.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows() {
    return this.data;
  }

  get columns() {
    return this.data[0].map((_, colIndex) => {
      // console.log(`Índice de columna actual: ${colIndex}`);
      const columna = this.data.map((row) => row[colIndex]);
      // console.log(`Columna generada para colIndex ${colIndex}:`, columna);
      return columna;
    });
  }
}

// Test cases
const matrix = new Matrix("1 2 3 4\n5 6 7 8\n9 8 7 6");
console.log("Filas:");
console.log(matrix.rows);
console.log("Columnas:");
console.log(matrix.columns);
