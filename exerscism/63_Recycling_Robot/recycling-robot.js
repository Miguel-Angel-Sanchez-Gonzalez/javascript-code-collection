// Solución al ejercicio de Exercism: "Recycling Robot"
// Enunciado tomado de Exercism.org

import { ElectronicDevice } from "./lib.js";

export function isBoolean(value) {
  return typeof value === "boolean";
}

export function isNumber(value) {
  return (
    (typeof value === "number" && Number.isFinite(value)) ||
    typeof value === "bigint"
  );
}

export function isObject(value) {
  return value !== null && typeof value === "object";
}

export function isNumericString(value) {
  return typeof value === "string" && /^-?\d+$/.test(value);
}

export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

export function hasType(object) {
  return "type" in object;
}

export function assertHasId(object) {
  if (!("id" in object)) {
    throw new Error("Object is missing the 'id' property");
  } else {
    return undefined;
  }
}

export function hasIdProperty(object) {
  return Object.hasOwn(object, "id");
}

export function hasDefinedType(object) {
  return Object.hasOwn(object, "type") && object.type !== undefined;
}

// Test cases
console.log(isBoolean(NaN));
console.log(isNumber(NaN));
console.log(isNumber("Hola Simpsons"));
console.log(isNumber(1492n));
console.log(isObject({ saludo: "Hola" }));
console.log(isObject(3n));
console.log(isNumericString(42));
console.log(isNumericString("42"));
console.log(isNumericString("Hi!"));
console.log(isNonEmptyArray([1, 2, 3]));
console.log(isNonEmptyArray([]));
