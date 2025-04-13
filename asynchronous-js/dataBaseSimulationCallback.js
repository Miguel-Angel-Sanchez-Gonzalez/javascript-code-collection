// 🧠 Reto: Simulando una base de datos de usuarios
// Supón que tienes una base de datos simulada con un pequeño retraso. Necesitamos dos funciones:

// 📝 1. obtenerUsuarioPorId(id, callback)
// Esta función simula obtener un usuario por su id.
// Usa setTimeout con un delay de 1000 ms.
// Dentro del timeout, busca un usuario por su ID en un arreglo de usuarios.
// Si lo encuentra, llama al callback pasando el usuario encontrado.
// Si no lo encuentra, llama al callback pasando null.

const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Luis" },
];

function obtenerUsuarioPorId(id, callback) {
  console.log("Buscando usuario...");

  setTimeout(() => {
    let usuarioEncontrado = null;
    for (const usuario of usuarios) {
      if (usuario.id === id) {
        usuarioEncontrado = usuario;
        break;
      }
    }
    callback(usuarioEncontrado);
  }, 1000);
}

// Test cases
obtenerUsuarioPorId(2, (usuario) => {
  if (usuario) {
    console.log(`Nombre: ${usuario.nombre}`);
  } else {
    console.log("Usuario no encontrado");
  }
});
