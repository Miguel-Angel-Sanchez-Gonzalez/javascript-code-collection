// Crear una función llamada ropaConDescuento que:
// Filtre los productos de categoría "ropa".
// Aplique un 15% de descuento solo a esos productos.
// Retorne un nuevo arreglo con esos productos, pero sin alterar el arreglo original inventario.

const inventario = [
  { nombre: "Zapatos", precio: 800, categoria: "ropa" },
  { nombre: "Tablet", precio: 1500, categoria: "tecnología" },
  { nombre: "Pantalón", precio: 300, categoria: "ropa" },
  { nombre: "Escritorio", precio: 700, categoria: "hogar" },
];

function ropaConDescuento(inventario) {
  return inventario
    .filter((p) => p.categoria === "ropa")
    .map((p) => ({ ...p, precio: p.precio * 0.85 }));
}

console.log(ropaConDescuento(inventario));
