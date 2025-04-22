// Solución al ejercicio de Exercism: "High Score Board"
// Enunciado tomado de Exercism.org

export function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = scoreBoard[player] + points;
  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    scoreBoard[key] = scoreBoard[key] + 100;
  }
  return scoreBoard;
}

export function normalizeScore(params) {
  params.score = params.normalizeFunction(params.score);
  return params.score;
}

// Test cases

console.log(createScoreBoard());

console.log(addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373));

console.log(removePlayer({ "Dave Thomas": 0 }, "Dave Thomas"));
console.log(removePlayer({ "Dave Thomas": 0 }, "Rose Fanaras"));

console.log(updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73));

const scoreBoard = {
  "Dave Thomas": 44,
  "Freyja Ćirić": 539,
  "José Valim": 265,
};

console.log(applyMondayBonus(scoreBoard));

function normalize(score) {
  return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };
console.log(normalizeScore(params));
