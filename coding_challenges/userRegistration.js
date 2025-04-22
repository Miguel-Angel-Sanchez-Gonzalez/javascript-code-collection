// Tienes una función que recibe una lista de usuarios. Cada usuario puede o no tener un nombre y una edad.
// Debes crear una nueva lista donde:

// Si el nombre está definido, lo usas. Si no, usas "Invitado".

// Si la edad está definida, la usas. Si no, usas 0.

// Al final, cada usuario debe verse así:
// { nombre: "Nombre", edad: Edad }

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: null, edad: 30 },
  { edad: 20 },
  { nombre: "Luis" },
  {},
];

function registrarUsuarios(listaUsuarios) {
  const usuarios_registrados = listaUsuarios.map((usuario) => ({
    nombre: usuario.nombre ?? "invitado",
    edad: usuario.edad ?? 0,
  }));
  return usuarios_registrados;
}

console.log(registrarUsuarios(usuarios));
