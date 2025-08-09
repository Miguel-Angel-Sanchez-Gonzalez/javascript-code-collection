// Solución al ejercicio de Exercism: "Mr. Robot"
// Enunciado tomado de Exercism.org

export class Robot {
  constructor() {
    this.name = Robot.generateName();
  }

  static generateName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    const getRandomChar = (charset) =>
      charset[Math.floor(Math.random() * charset.length)];

    const name =
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(digits) +
      getRandomChar(digits) +
      getRandomChar(digits);

    return name;
  }
}

Robot.releaseNames = () => {};

let robot = new Robot();
console.log(robot.name);
