// Solución al ejercicio de Exercism: "Custom Signs"
// Enunciado tomado de Exercism.org

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

// Test case
console.log(buildSign("Birthday", "Rob"));

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age >= 50 ? "mature" : "young"
  } fellow you are.`;
}

// Test cases
console.log(buildBirthdaySign(50));
console.log(buildBirthdaySign(45));

export function graduationFor(name, year) {
  return `Congratulations ${name}!
  Class of ${year}`;
}

// Test case
console.log(graduationFor("Hannah", 2022));

export function costOf(sign, currency) {
  const priceSign = sign.length * 2 + 20;
  return `Your sign costs ${priceSign.toFixed(2)} ${currency}.`;
}

// Test case
console.log(costOf("Happy Birthday Rob!", "dollars"));
