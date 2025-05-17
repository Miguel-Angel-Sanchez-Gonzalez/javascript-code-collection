function generateRow(longitud) {
  return Array.from({ length: longitud }, (_, i) =>
    i % 2 === 0 ? "white" : "black"
  );
}

// Test cases
console.log(generateRow(8));

function generateChessboard(longitud) {
  const tablero = [];
  for (let i = 0; i < longitud; i++) {
    const fila = [];
    for (let j = 0; j < longitud; j++) {
      if ((i + j) % 2 === 0) {
        fila.push("B");
      } else {
        fila.push("N");
      }
    }
    tablero.push(fila);
  }
  return tablero;
}

console.log(generateChessboard(8));
