// Solución al ejercicio de Exercism: "Lasagna Master"
// Enunciado tomado de Exercism.org

function cookingStatus(time) {
  if (time === undefined) {
    return "You forgot to set the timer.";
  } else if (time !== 0) {
    return "Not done, please wait.";
  }

  return "Lasagna is done.";
}

// Test cases
console.log(cookingStatus(1));
console.log(cookingStatus(42));
console.log(cookingStatus(8.5));
console.log(cookingStatus(0.1));

function preparationTime(layers, timeLayer) {
  let timeIngredient = timeLayer;
  timeIngredient = timeIngredient ?? 2;
  return layers.length * timeIngredient;
}

// Test cases
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
console.log(preparationTime(layers, 3));
console.log(preparationTime(layers));

function quantities(layers) {
  let totalSauce = 0;
  let totalNoodles = 0;

  for (let index = 0; index < layers.length; index++) {
    if (layers[index] === "sauce") {
      totalSauce += 0.2;
    } else if (layers[index] === "noodles") {
      totalNoodles += 50;
    }
  }

  return { noodles: totalNoodles, sauce: totalSauce };
}

// Test cases
console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
);

function addSecretIngredient(friendsList, myList) {
  const friendList = friendsList.map((ingrediet) => ingrediet);
  myList.push(friendList.pop());
  return;
}

// Test cases
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

addSecretIngredient(friendsList, myList);
console.log(friendsList);
console.log(myList);

function scaleRecipe(recipe, amount) {
  const tightRecipe = { ...recipe };
  for (const key in tightRecipe) {
    tightRecipe[key] = tightRecipe[key] / 2;
  }
  for (const key in tightRecipe) {
    tightRecipe[key] = tightRecipe[key] * amount;
  }

  return tightRecipe;
}

// Test cases
const recipe1 = {
  sauce: 0.5,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};

console.log(scaleRecipe(recipe1, 6));
// console.log(recipe1);
