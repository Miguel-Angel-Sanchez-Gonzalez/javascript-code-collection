// Reescribe las funciones usando Promise como ya hiciste (si quieres puedes mantener esa parte).

// Crea una función async llamada mostrarUsuarioYPosts(id) que:

// Espere (await) el resultado de obtenerUsuarioPorId.

// Si todo va bien, imprima el nombre del usuario.

// Luego espere (await) los posts de ese usuario.

// Imprima los títulos de los posts.

// Usa try...catch para manejar cualquier error.

// Llama a mostrarUsuarioYPosts(2) y también a mostrarUsuarioYPosts(5) para probar el caso donde no existe el usuario.

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

async function mostrarUsuarioYPosts(id) {
  try {
    const usuario = await obtenerUsuarioPorId(id);
    console.log(`Nombre: ${usuario.nombre}`);

    const posts = await obtenerPostsDeUsuario(usuario.id);
    for (const post of posts) {
      console.log(` - ${post.titulo}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Test case
mostrarUsuarioYPosts(2);
