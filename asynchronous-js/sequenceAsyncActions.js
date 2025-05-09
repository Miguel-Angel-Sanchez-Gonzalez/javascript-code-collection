function prepararIngredientes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ingredientes listos");
    }, 500);
  });
}

function cocinarPlato(ingredientes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Plato cocinado");
    }, 1000);
  });
}

function servirPlato(plato) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Plato servido");
    }, 250);
  });
}

function realizarProceso() {
  return prepararIngredientes()
    .then((resultado) => {
      console.log(resultado);
      return cocinarPlato(resultado);
    })
    .then((resultado) => {
      console.log(resultado);
      return servirPlato(resultado);
    })
    .then((resultado) => {
      console.log(resultado);
      return `Proceso completo: Ingredientes listos -> Plato cocinado -> ${resultado}`;
    });
}

realizarProceso()
  .then((mensajeFinal) => {
    console.log(mensajeFinal);
  })
  .catch((error) => {
    console.error("Error en el proceso:", error);
  });
