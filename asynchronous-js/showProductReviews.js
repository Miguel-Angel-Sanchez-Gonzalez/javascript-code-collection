// Crear una función mostrarProductoYReseñas(id) que reciba el ID de un producto y:
// Busque el producto por su id con .find() y lo muestre.
// Busque todas las reseñas con .filter() y las muestre.
// Maneje los errores:
// Si el producto no existe, mostrar: "Producto no encontrado".
// Si no hay reseñas, mostrar: "No hay reseñas para este producto".

const productos = [
  { id: 1, nombre: "Laptop" },
  { id: 2, nombre: "Teléfono" },
  { id: 3, nombre: "Tablet" },
];

const reseñas = [
  { productoId: 1, texto: "Muy buena calidad." },
  { productoId: 1, texto: "Vale la pena el precio." },
  { productoId: 2, texto: "Buen rendimiento, pero se calienta." },
];

function obtenerProductoPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productos.find((p) => p.id === id);
      product
        ? resolve(product)
        : reject(new Error("No se encontró el producto"));
    }, 1000);
  });
}

function obtenerReseñasDeProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reviews = reseñas.filter((r) => r.productoId === id);
      reviews.length > 0
        ? resolve(reviews)
        : reject(new Error("No se encuentran reseñas de ese producto"));
    }, 1000);
  });
}

async function mostrarProductoYReseñas(id) {
  try {
    const miProducto = await obtenerProductoPorId(id);
    console.log(miProducto.nombre);

    const misReseñas = await obtenerReseñasDeProducto(id);

    for (const reseña of misReseñas) {
      console.log(reseña.texto);
    }
  } catch (error) {
    console.error(error.message);
  }
}

mostrarProductoYReseñas(1);
