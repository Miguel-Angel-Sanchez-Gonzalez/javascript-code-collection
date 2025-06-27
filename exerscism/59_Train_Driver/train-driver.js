// Solución al ejercicio de Exercism: "Train Driver"
// Enunciado tomado de Exercism.org

export function getListOfWagons(...numbers) {
  return numbers;
}

export function fixListOfWagons(list) {
  const [first, second, ...restElementos] = list;
  return [...restElementos, first, second];
}

export function correctListOfWagons(ids, missingWagons) {
  const [firstID, ...restIDs] = ids;
  return [firstID, ...missingWagons, ...restIDs];
}

export function extendRouteInformation(information, additional) {
  return { ...information, ...additional };
}

export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...restInformation } = information;
  return [timeOfArrival, restInformation];
}

// Test cases
console.log(getListOfWagons(1, 7, 12, 3, 14, 8, 5));
const eachWagonsID = [2, 5, 1, 7, 4, 12, 6, 3, 13];
console.log(fixListOfWagons(eachWagonsID));

const eachWagonsID2 = [1, 5, 20, 7, 4, 8];
const missingWagons = [3, 17, 6, 15];
console.log(correctListOfWagons(eachWagonsID2, missingWagons));

const route = { from: "Berlin", to: "Hamburg" };
const moreRouteInformation = { length: "100", speed: "50" };
console.log(extendRouteInformation(route, moreRouteInformation));

const routeInformation = {
  from: "Berlin",
  to: "Hamburg",
  length: "100",
  timeOfArrival: "10:10",
};

console.log(separateTimeOfArrival(routeInformation));
