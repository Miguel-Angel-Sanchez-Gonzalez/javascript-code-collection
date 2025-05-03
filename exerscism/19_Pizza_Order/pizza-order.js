// Solución al ejercicio de Exercism: "Pizza Order"
// Enunciado tomado de Exercism.org

export function pizzaPrice(pizza, ...extras) {
  let basePrice = 0;
  switch (pizza) {
    case "Margherita":
      basePrice += 7;
      break;
    case "Caprese":
      basePrice += 9;
      break;
    case "Formaggio":
      basePrice += 10;
      break;
    default:
      break;
  }

  function sumExtras(extrasList) {
    if (extrasList.length === 0) {
      return 0;
    }

    const [first, ...rest] = extrasList;
    const price =
      first === "ExtraSauce" ? 1 : first === "ExtraToppings" ? 2 : 0;

    return price + sumExtras(rest);
  }

  return basePrice + sumExtras(extras);
}

// Test cases
console.log(pizzaPrice("Margherita"));
console.log(pizzaPrice("Caprese", "ExtraSauce", "ExtraToppings"));
console.log(
  pizzaPrice(
    "Caprese",
    "ExtraToppings",
    "ExtraToppings",
    "ExtraToppings",
    "ExtraToppings"
  )
);

export function orderPrice(pizzaOrders) {
  let totalPrice = 0;

  for (let index = 0; index < pizzaOrders.length; index++) {
    const order = pizzaOrders[index];
    totalPrice += pizzaPrice(order.pizza, ...order.extras);
  }

  return totalPrice;
}

// Test cases
class PizzaOrder {
  constructor(pizza, ...extras) {
    this.pizza = pizza;
    this.extras = extras;
  }
}

const order1 = new PizzaOrder("Margherita"); // $7
const order2 = new PizzaOrder("Caprese", "ExtraSauce"); // $9 + $1 = $10
const order3 = new PizzaOrder("Formaggio", "ExtraToppings", "ExtraToppings"); // $10 + $2 + $2 = $14

const total = orderPrice([order1, order2, order3]);

console.log(total); // 7 + 10 + 14 = 31
