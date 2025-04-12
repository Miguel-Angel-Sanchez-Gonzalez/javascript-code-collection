// Ejercicio 2: Obtener los posts de un usuario por ID
// Supongamos que tienes una lista de usuarios y otra de posts. Cada post pertenece a un usuario
//  (relacionado por su ID). Crea dos funciones asincrónicas con setTimeout:
// obtenerUsuarioPorId(id, callback)
// obtenerPostsDeUsuario(id, callback)
// Ambas deben simular una llamada asincrónica.

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

function obtenerUsuarioPorId(id, callback) {
  let userFind = null;
  setTimeout(() => {
    for (const user of usuarios) {
      if (user.id === id) {
        userFind = user;
        break;
      }
    }
    callback(userFind);
  }, 1000);
}

function obtenerPostsDeUsuario(id, callback) {
  let postFind = [];
  setTimeout(() => {
    for (const post of posts) {
      if (post.userId === id) {
        postFind.push(post);
      }
    }
    callback(postFind);
  }, 1000);
}

// Test cases
obtenerUsuarioPorId(2, (user) => {
  if (user) {
    console.log(`Nombre del usuario: ${user.nombre}`);

    obtenerPostsDeUsuario(user.id, (post) => {
      if (post.length > 0) {
        console.log("Posts:");
        for (const personalPost of post) {
          console.log(`- ${personalPost.titulo}`);
        }
      } else {
        console.log("No existen posts para este usuario");
      }
    });
  } else {
    console.log("Usuario no encontrado");
  }
});
