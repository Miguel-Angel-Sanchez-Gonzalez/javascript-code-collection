// Objetivo del ejercicio
// Crear una función obtenerPostPorId(id) que devuelva el post correspondiente o rechace si no existe.
// Crear otra función obtenerComentariosDePost(id) que devuelva los comentarios del post o rechace si no hay comentarios.
// Usar async/await en una función principal llamada mostrarPostYComentarios(id) para:
// Mostrar el título del post.
// Mostrar los comentarios debajo (uno por línea con - comentario).
// Capturar y mostrar cualquier error con try/catch.

const posts = [
  { id: 1, titulo: "Post de Juan" },
  { id: 2, titulo: "Post de Ana" },
];

const comentarios = [
  { postId: 1, texto: "Buen post" },
  { postId: 1, texto: "Muy informativo" },
  { postId: 2, texto: "Gracias por compartir" },
];

function obtenerPostPorId(id) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      const resultPost = posts.find((p) => p.id === id);
      resultPost
        ? resolved(resultPost)
        : reject(new Error("Post no encontrado"));
    }, 1000);
  });
}

function obtenerComentariosDePost(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filterComments = comentarios.filter((c) => c.postId === id);
      filterComments.length > 0
        ? resolve(filterComments)
        : reject(reject(new Error("No existen comentarios para este post")));
    }, 1000);
  });
}

async function mostrarPostYComentarios(id) {
  try {
    const misPost = await obtenerPostPorId(id);
    console.log(`${misPost.titulo}:`);

    const misComentarios = await obtenerComentariosDePost(id);

    for (const comentario of misComentarios) {
      console.log(` - ${comentario.texto}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

mostrarPostYComentarios(1);
