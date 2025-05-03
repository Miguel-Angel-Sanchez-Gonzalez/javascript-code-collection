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
