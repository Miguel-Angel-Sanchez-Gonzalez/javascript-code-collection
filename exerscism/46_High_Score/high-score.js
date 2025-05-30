export class HighScores {
  constructor(scores) {
    this.arrScores = Array.from(scores);
  }

  get scores() {
    return this.arrScores;
  }

  get latest() {
    return this.arrScores[this.arrScores.length - 1];
  }

  get personalBest() {
    let best = 0;
    for (const score of this.arrScores) {
      if (score > best) {
        best = score;
      }
    }
    return best;
  }

  get personalTopThree() {
    let result = [];
    const sortScores = this.arrScores.sort((a, b) => b - a);
    for (let i = 0; i <= 2; i++) {
      if (sortScores[i] !== undefined) {
        result.push(sortScores[i]);
      }
    }
    return result;
  }
}

const input = [40];
console.log(new HighScores(input).scores);
console.log(new HighScores(input).latest);
console.log(new HighScores(input).personalBest);
console.log(new HighScores(input).personalTopThree);
