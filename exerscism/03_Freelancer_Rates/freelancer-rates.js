// Solución al ejercicio de Exercism: "Freelancer Rates"
// Enunciado tomado de Exercism.org

export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const ratePerDay = ratePerHour * 8;
  const numDaysWithDiscount = Math.floor(numDays / 22) * 22;
  const priceDiscount = Math.ceil(
    ratePerDay * numDaysWithDiscount * (1 - discount)
  );

  const numDaysWithoutDiscount = numDays - numDaysWithDiscount;
  const priceNormal = numDaysWithoutDiscount * ratePerDay;

  return Math.ceil(priceDiscount + priceNormal);
}

// Test cases
console.log(dayRate(89));

console.log(daysInBudget(20000, 89));

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
