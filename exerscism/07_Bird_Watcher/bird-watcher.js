// Solución al ejercicio de Exercism: "Bird Watcher"
// Enunciado tomado de Exercism.org

export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    totalBirds += birdsPerDay[index];
  }
  return totalBirds;
}

export function birdsInWeek(birdsPerDay, week) {
  const dayStart = (week - 1) * 7;
  let birdPerWeek = 0;

  for (let index = dayStart; index < dayStart + 7; index++) {
    birdPerWeek += birdsPerDay[index];
  }

  return birdPerWeek;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if (index % 2 === 0) {
      birdsPerDay[index] = birdsPerDay[index] + 1;
    }
  }

  return birdsPerDay;
}

// Test cases

const birdsPerDay = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0];
console.log(totalBirdCount(birdsPerDay));

console.log(birdsInWeek(birdsPerDay, 1));

const birdsPerDay2 = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0];
console.log(fixBirdCountLog(birdsPerDay2));
