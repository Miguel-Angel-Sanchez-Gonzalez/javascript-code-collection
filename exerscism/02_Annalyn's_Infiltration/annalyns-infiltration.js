export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) {
    return false;
  }
  return true;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  }
  return false;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent) {
    if (!archerIsAwake) {
      return true;
    }
  } else {
    if (!archerIsAwake && !knightIsAwake && prisonerIsAwake) {
      return true;
    }
  }
  return false;
}

// Test cases
console.log(canExecuteFastAttack(true));

console.log(canSpy(false, true, false));

console.log(canSignalPrisoner(false, true));

console.log(canFreePrisoner(false, false, false, true));
