// Reto de programación: "Encadenando Promesas"
// Crea dos funciones:

// obtenerUsuarioPorId(id) → Retorna una promesa que resuelve con un objeto usuario si lo encuentra
// después de 1 segundo, o la rechaza si no lo encuentra.

// obtenerPostsDeUsuario(id) → Retorna una promesa que resuelve con un arreglo de posts que pertenecen al
// usuario después de 1 segundo.

// Usa estas funciones para:
// Buscar un usuario por su ID.
// Si se encuentra, imprimir su nombre.
// Luego, obtener sus posts y mostrarlos en consola.
// Si en cualquier parte hay un error (usuario no existe o no hay posts), captúralo con .catch().

const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Luis" },
];

const posts = [
  { userId: 1, titulo: "Post 1 de Juan" },
  { userId: 2, titulo: "Post 1 de Ana" },
  { userId: 2, titulo: "Post 2 de Ana" },
  { userId: 3, titulo: "Post 1 de Luis" },
];

function obtenerUsuarioPorId(id) {
  return new Promise((resolved, reject) => {
    let resultUser = null;
    setTimeout(() => {
      for (const user of usuarios) {
        if (user.id === id) {
          resultUser = user;
          resolved(resultUser);
          return;
        }
      }
      reject(new Error("Usuario no encontrado"));
    }, 1000);
  });
}

function obtenerPostsDeUsuario(id) {
  return new Promise((resolved, reject) => {
    let postUser = [];
    setTimeout(() => {
      for (const post of posts) {
        if (post.userId === id) {
          postUser.push(post);
        }
      }
      if (postUser.length > 0) {
        resolved(postUser);
      } else {
        reject(new Error("No hay posts para este usuario"));
      }
    }, 1000);
  });
}

obtenerUsuarioPorId(1)
  .then((resultUser) => {
    console.log(`Nombre: ${resultUser.nombre}`);
    return obtenerPostsDeUsuario(resultUser.id);
  })
  .then((postUser) => {
    for (const post of postUser) {
      console.log(`- ${post.titulo}`);
    }
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
