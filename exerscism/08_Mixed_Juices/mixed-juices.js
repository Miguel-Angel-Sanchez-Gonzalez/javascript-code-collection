// Solución al ejercicio de Exercism: "Mixed Juices"
// Enunciado tomado de Exercism.org

export function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;

    case "Energizer":
      time = 1.5;
      break;

    case "Green Garden":
      time = 1.5;
      break;

    case "Tropical Island":
      time = 3;
      break;

    case "All or Nothing":
      time = 5;
      break;

    default:
      time = 2.5;
      break;
  }

  return time;
}

export function limesToCut(wedgesNeeded, limes) {
  let numLimes = 0;
  let numWedges = 0;

  while (
    numWedges < wedgesNeeded &&
    numLimes < limes.length &&
    limes.length > 0
  ) {
    switch (limes[numLimes]) {
      case "small":
        numWedges += 6;
        break;
      case "medium":
        numWedges += 8;
        break;
      case "large":
        numWedges += 10;
        break;

      default:
        break;
    }
    numLimes += 1;
  }

  return numLimes;
}

export function remainingOrders(timeLeft, orders) {
  const ordersLeft = orders.map((o) => o);
  const remainingOrders = [];
  let index = 0;

  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[index]);
    ordersLeft.shift();
    index++;
  }

  return ordersLeft;
}

// Test cases
const limes = [
  "small",
  "large",
  "large",
  "medium",
  "small",
  "large",
  "large",
  "medium",
];

console.log(timeToMixJuice("Tropical Island"));
console.log(timeToMixJuice("Berries & Lime"));

console.log(limesToCut(4, ["medium", "small"]));
console.log(limesToCut(42, limes));
console.log(limesToCut(10, []));

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
