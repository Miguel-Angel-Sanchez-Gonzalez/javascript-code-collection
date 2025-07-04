// Solución al ejercicio de Exercism: "Book Store"
// Enunciado tomado de Exercism.org

function group(basket) {
  const conteo = [0, 0, 0, 0, 0];
  for (const tomo of basket) {
    conteo[tomo - 1] += 1;
  }
  return conteo;
}

export const cost = (basket, memo = {}) => {
  let librosRestantes = group(basket);

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

    const combinaciones = combine(indicesDisponibles, tamañoGrupo);

    for (const combinacion of combinaciones) {
      const nuevoEstado = [...librosRestantes];
      for (const indice of combinacion) {
        nuevoEstado[indice] -= 1;
      }

      const precioGrupo = tamañoGrupo * 800 * (1 - descuento[tamañoGrupo]);

      const costoTotal = precioGrupo + cost(nuevoEstado, memo);

      if (costoTotal < costoMinimo) {
        costoMinimo = costoTotal;
      }
    }
  }

  memo[clave] = costoMinimo;

  return costoMinimo;
};

function combine(lista, k) {
  if (k === 0) return [[]];
  if (lista.length < k) return [];

  const resultado = [];

  for (let i = 0; i <= lista.length - k; i++) {
    const elemento = lista[i];
    const subcombinaciones = combine(lista.slice(i + 1), k - 1);

    for (const subcombo of subcombinaciones) {
      resultado.push([elemento, ...subcombo]);
    }
  }

  return resultado;
}

// Test cases
console.log(cost([1]));
console.log(cost([2, 2]));
console.log(cost([]));
console.log(cost([1, 2]));
console.log(cost([1, 2, 3]));
console.log(cost([2, 2, 2, 1, 1]));
