// Solución al ejercicio de Exercism: "Vehicle Purchase"
// Enunciado tomado de Exercism.org

export function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`;
  }
  return `${option2} is clearly the better choice.`;
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age >= 3 && age <= 10) {
    return originalPrice * 0.7;
  } else if (age > 10) {
    return originalPrice * 0.5;
  }
}

// Test cases
console.log(needsLicense("car"));
console.log(needsLicense("bike"));
console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla"));
console.log(chooseVehicle("Volkswagen Beetle", "Volkswagen Golf"));
console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(25000, 10));
