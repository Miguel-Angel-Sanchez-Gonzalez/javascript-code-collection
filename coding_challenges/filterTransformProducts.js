// Tienes un arreglo de productos, cada uno con nombre, precio y categoría.
// Crea una función que reciba este arreglo y:
// Filtre solo los productos de la categoría "tecnología".
// Aplique un descuento del 10% a cada uno.
// Devuelva un nuevo arreglo con los productos actualizados (sin modificar el original).

const productos = [
  { nombre: "Laptop", precio: 1200, categoria: "tecnología" },
  { nombre: "Silla", precio: 150, categoria: "hogar" },
  { nombre: "Auriculares", precio: 200, categoria: "tecnología" },
  { nombre: "Camiseta", precio: 25, categoria: "ropa" },
];

function productosActualizados(productos) {
  return productos
    .filter((p) => p.categoria === "tecnología")
    .map((p) => ({
      ...p, //operador de propagación
      precio: p.precio * 0.9,
    }));
}

console.log(productosActualizados(productos));
