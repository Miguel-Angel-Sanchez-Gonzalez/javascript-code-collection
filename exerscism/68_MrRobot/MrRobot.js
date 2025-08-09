// Solución al ejercicio de Exercism: "Mr. Robot"
// Enunciado tomado de Exercism.org

export class Robot {
  constructor() {
    this.name = Robot.generateName();
  }

  static generateName() {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const min = 1;
    const max = letters.length - 1;

    let nameRobot = "";

    do {
      if (nameRobot.length < 2) {
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        nameRobot += letters[random];
      } else {
        const random = Math.floor(
          Math.random() * (numbers.length - 1 - min + 1) + min
        );
        nameRobot += numbers[random];
      }
    } while (nameRobot.length < 5);

    return nameRobot;
  }
}

Robot.releaseNames = () => {};

let robot = new Robot();
console.log(robot.name);
