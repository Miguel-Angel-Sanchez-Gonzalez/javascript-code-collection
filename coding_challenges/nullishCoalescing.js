function saludoPersonalizado(name) {
  name = name ?? "visitante";
  return `Hola, ${name}`;
}

// Test cases

console.log(saludoPersonalizado("Luis"));
console.log(saludoPersonalizado(null));
console.log(saludoPersonalizado(undefined));
console.log(saludoPersonalizado(""));
