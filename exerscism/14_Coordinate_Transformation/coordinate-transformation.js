// Solución al ejercicio de Exercism: "Coordinate Transformation"
// Enunciado tomado de Exercism.org

export function translate2d(dx, dy) {
  return function (x, y) {
    return [dx + x, dy + y];
  };
}

// Test cases
const moveCoordinatesRight2Px = translate2d(2, 0);
const result = moveCoordinatesRight2Px(4, 8);
const result2 = moveCoordinatesRight2Px(1, 1);
console.log(result);
console.log(result2);

export function scale2d(sx, sy) {
  return function (x, y) {
    return [sx * x, sy * y];
  };
}

// Test cases
const doubleScale = scale2d(2, 2);
const result3 = doubleScale(6, -3);
console.log(result3);

export function composeTransform(f, g) {
  return function (x, y) {
    return g(...f(x, y));
  };
}

// Test cases
const moveCoordinatesRight2P = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(
  moveCoordinatesRight2P,
  doubleCoordinates
);
const result5 = composedTransformations(0, 1);
console.log(result5);

export function memoizeTransform(f) {
  let lastX, lastY, lastResult;

  return function (x, y) {
    if (x === lastX && y === lastY) {
      return lastResult;
    }

    lastX = x;
    lastY = y;
    lastResult = f(x, y);

    return lastResult;
  };
}

// Test cases
const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);
console.log(memoizedScale(4, 3));
console.log(memoizedScale(4, 3));
