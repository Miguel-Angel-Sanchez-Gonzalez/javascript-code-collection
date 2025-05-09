function simularOperacion(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("Operación exitosa");
      } else {
        reject(new Error("Operación fallida"));
      }
    }, 1000);
  });
}

simularOperacion(false)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
