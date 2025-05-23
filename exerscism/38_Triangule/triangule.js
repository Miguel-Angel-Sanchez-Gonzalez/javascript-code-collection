// Solución al ejercicio de Exercism: "Triangle"
// Enunciado tomado de Exercism.org
export class Triangle {
  constructor(...sides) {
    const [a, b, c] = sides;
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  get isEquilateral() {
    if (!this.isATriangle()) {
      return false;
    }
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }

  get isIsosceles() {
    if (!this.isATriangle()) {
      return false;
    }
    return (
      this.sideA === this.sideB ||
      this.sideB === this.sideC ||
      this.sideA === this.sideC
    );
  }

  get isScalene() {
    if (!this.isATriangle()) {
      return false;
    }
    return (
      this.sideA !== this.sideB &&
      this.sideB !== this.sideC &&
      this.sideA !== this.sideC
    );
  }

  isATriangle() {
    return (
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
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
