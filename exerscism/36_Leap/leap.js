// Solución al ejercicio de Exercism: "Leaps"
// Enunciado tomado de Exercism.org

export const isLeap = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

// Test cases
console.log(isLeap(2015));
console.log(isLeap(1970));
console.log(isLeap(1996));
console.log(isLeap(1960));
console.log(isLeap(2100));
console.log(isLeap(1900));
console.log(isLeap(2000));
console.log(isLeap(2400));
console.log(isLeap(1800));
