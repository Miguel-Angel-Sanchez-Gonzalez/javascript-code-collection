export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age >= 50 ? "mature" : "young"
  } fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!
  Class of ${year}`;
}

export function costOf(sign, currency) {
  const priceSign = sign.length * 2 + 20;
  return `Your sign costs ${priceSign.toFixed(2)} ${currency}.`;
}

console.log(costOf("Happy Birthday Rob!", "dollars"));
