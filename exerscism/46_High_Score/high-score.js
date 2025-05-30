// Solución al ejercicio de Exercism: "High Score"
// Enunciado tomado de Exercism.org

export class HighScores {
  constructor(scores) {
    this.arrScores = Array.from(scores);
  }

  get scores() {
    return [...this.arrScores];
  }

  get latest() {
    return this.arrScores[this.arrScores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.arrScores);
  }

  get personalTopThree() {
    const sortedScores = [...this.arrScores].sort((a, b) => b - a);
    return sortedScores.slice(0, 3);
  }
}

// Test cases
const input = [40];
console.log(new HighScores(input).scores);
console.log(new HighScores(input).latest);
console.log(new HighScores(input).personalBest);
console.log(new HighScores(input).personalTopThree);
