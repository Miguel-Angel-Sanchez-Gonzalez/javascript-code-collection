// Solución al ejercicio de Exercism: "Mr. Robot"
// Enunciado tomado de Exercism.org

export class Robot {
  static usedNames = new Set();
  static MAX_NAMES = 676000;

  constructor() {
    this.name = Robot.generateName();
  }

  static generateName() {
    if (this.usedNames.size >= this.MAX_NAMES) {
      throw new Error("No quedan nombres únicos disponibles");
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const getRandomChar = (charset) =>
      charset[Math.floor(Math.random() * charset.length)];

    let name;
    do {
      name =
        getRandomChar(letters) +
        getRandomChar(letters) +
        getRandomChar(digits) +
        getRandomChar(digits) +
        getRandomChar(digits);
    } while (this.usedNames.has(name));

    this.usedNames.add(name);
    return name;
  }

  reset() {
    this.name = Robot.generateName();
  }

  static releaseNames() {
    this.usedNames.clear();
  }
}

// Test cases

// Test 1: Formato de nombre
const r1 = new Robot();
console.assert(
  /^[A-Z]{2}\d{3}$/.test(r1.name),
  "El nombre debe ser 2 letras + 3 dígitos"
);

// Test 2: Nombres únicos en robots distintos
const r2 = new Robot();
console.assert(
  r1.name !== r2.name,
  "Robots distintos no deben compartir el mismo nombre"
);

// Test 3: Nombres únicos después de reset
const oldName = r1.name;
r1.reset();
console.assert(
  r1.name !== oldName,
  "Después de reset el robot debe tener un nombre diferente"
);
console.assert(
  ![r2.name].includes(r1.name),
  "El nuevo nombre no debe coincidir con otros robots"
);

// Test 4: Nombres nunca reutilizados después de reset
const usedNames = new Set([oldName, r2.name]);
console.assert(
  !usedNames.has(r1.name),
  "El nombre nuevo no debe ser uno previamente usado"
);

// Test 5: releaseNames limpia el registro
Robot.releaseNames();
console.assert(
  Robot.usedNames.size === 0,
  "releaseNames debe vaciar el registro de nombres"
);

// Crear robots después de limpiar
// Test 6: Se pueden generar nombres después de releaseNames
const r3 = new Robot();
const r4 = new Robot();
console.assert(
  r3.name !== r4.name,
  "Después de limpiar, los nombres siguen siendo únicos"
);
console.assert(
  Robot.usedNames.size === 2,
  "Después de limpiar y crear 2 robots, el registro debe tener 2 nombres"
);

console.log("✅ Todos los tests pasaron sin problemas");
