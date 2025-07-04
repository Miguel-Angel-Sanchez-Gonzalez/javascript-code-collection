export const cost = (librosRestantes, memo = {}) => {
  if (librosRestantes.every((libro) => libro === 0)) return 0;

  const clave = librosRestantes.join(",");
  if (clave in memo) return memo[clave];

  let costoMinimo = Infinity;

  const indicesDisponibles = [];
  for (let i = 0; i < librosRestantes.length; i++) {
    if (librosRestantes[i] > 0) {
      indicesDisponibles.push(i);
    }
  }

  const descuento = {
    1: 0.0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  };

  for (let tamañoGrupo = 1; tamañoGrupo <= 5; tamañoGrupo++) {
    if (indicesDisponibles.length < tamañoGrupo) continue;

    const combinaciones = combinar(indicesDisponibles, tamañoGrupo);

    for (const combinacion of combinaciones) {
      const nuevoEstado = [...librosRestantes];
      for (const indice of combinacion) {
        nuevoEstado[indice] -= 1;
      }

      const precioGrupo = tamañoGrupo * 8 * (1 - descuento[tamañoGrupo]);
      const costoTotal = precioGrupo + cost(nuevoEstado, memo);

      if (costoTotal < costoMinimo) {
        costoMinimo = costoTotal;
      }
    }
  }

  memo[clave] = costoMinimo;
  return costoMinimo;
};
