// Solución al ejercicio de Exercism: "Windowing System"
// Enunciado tomado de Exercism.org

//--Class Size
function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

// Test cases (Class Size)
const size = new Size(1080, 764);
console.log(size.width);
console.log(size.height);

size.resize(1920, 1080);
console.log(size.width);
console.log(size.height);

const size2 = new Size();
console.log(size2.width);
console.log(size2.height);

//--Class Position
function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

// Test cases (Class Position)
const point = new Position();
console.log(point.x);
console.log(point.y);

point.move(100, 200);
console.log(point.x);
console.log(point.y);

const p2 = new Position(10, 20);
console.log(p2.x);
console.log(p2.y);

// -- Class ProgramWindow
class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size = new Size(newWidth, newHeight);
  }

  move(newPosition) {
    const maxPositionX = this.screenSize.width - this.size.width;
    const maxPositionY = this.screenSize.height - this.size.height;

    const newPositionX = Math.max(0, Math.min(newPosition.x, maxPositionX)); //750
    const newPositionY = Math.max(0, Math.min(newPosition.y, maxPositionY)); //650

    this.position = new Position(newPositionX, newPositionY);
  }
}

// Test cases (Class ProgramWindow)
const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
console.log(programWindow.screenSize.height);

// Test cases (resize)
const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height);

// Test cases (move)
const programWindow2 = new ProgramWindow();
const newSize2 = new Size(100, 100);
programWindow2.resize(newSize2);
const newPosition = new Position(750, 650);
programWindow2.move(newPosition);
console.log(programWindow2.position.x);
console.log(programWindow2.position.y);

function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}

// Test case changeWindow
const window = new ProgramWindow();
changeWindow(window);
console.log(window.size.width);
console.log(window.size.height);
console.log(window.position.x);
console.log(window.position.y);
