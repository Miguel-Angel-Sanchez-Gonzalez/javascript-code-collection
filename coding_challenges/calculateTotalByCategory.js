const productos = [
  { nombre: "Zapatos", precio: 800, categoria: "ropa" },
  { nombre: "Tablet", precio: 1500, categoria: "tecnología" },
  { nombre: "Pantalón", precio: 300, categoria: "ropa" },
  { nombre: "Escritorio", precio: 700, categoria: "hogar" },
  { nombre: "Celular", precio: 2000, categoria: "tecnología" },
];

function calcularTotalCategoria(productos) {
  return productos.reduce((acumulator, producto) => {
    acumulator[producto.categoria] =
      (acumulator[producto.categoria] || 0) + producto.precio;
    return acumulator;
  }, {});
}

console.log(calcularTotalCategoria(productos));
