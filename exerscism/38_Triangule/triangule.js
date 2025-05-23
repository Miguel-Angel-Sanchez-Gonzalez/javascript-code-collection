// Solución al ejercicio de Exercism: "Triangle"
// Enunciado tomado de Exercism.org
export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
  }

  get isATriangle() {
    const [a, b, c] = this.sides;
    return a > 0 && a + b > c;
  }

  get isValid() {
    return this.isATriangle;
  }

  get isEquilateral() {
    return (
      this.isValid &&
      this.sides[0] === this.sides[1] &&
      this.sides[1] === this.sides[2]
    );
  }

  get isIsosceles() {
    return (
      this.isValid &&
      (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2])
    );
  }

  get isScalene() {
    return (
      this.isValid &&
      this.sides[0] !== this.sides[1] &&
      this.sides[1] !== this.sides[2]
    );
  }
}

// Test cases

const triangle = new Triangle(2, 2, 2);
console.log(triangle.isEquilateral);

const triangle2 = new Triangle(2, 3, 2);
console.log(triangle2.isEquilateral);

const triangle3 = new Triangle(5, 4, 6);
console.log(triangle3.isEquilateral);

const triangle4 = new Triangle(0, 0, 0);
console.log(triangle4.isEquilateral);

const triangle5 = new Triangle(0.5, 0.5, 0.5);
console.log(triangle5.isEquilateral);

const triangle6 = new Triangle(3, 4, 4);
console.log(triangle6.isIsosceles);

const triangle7 = new Triangle(4, 4, 3);
console.log(triangle7.isIsosceles);

const triangle8 = new Triangle(4, 3, 4);
console.log(triangle8.isIsosceles);

const triangle9 = new Triangle(4, 4, 4);
console.log(triangle9.isIsosceles);

const triangle10 = new Triangle(2, 3, 4);
console.log(triangle10.isIsosceles);

const triangle11 = new Triangle(4, 4, 4);
console.log(triangle11.isScalene);

const triangle12 = new Triangle(0.5, 0.4, 0.6);
console.log(triangle12.isScalene);
