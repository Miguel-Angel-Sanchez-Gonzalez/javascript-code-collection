// Solución al ejercicio de Exercism: "Fruit Picker"
// Enunciado tomado de Exercism.org

import { notify } from "./notifier";
import { order } from "./grocer";

export function onSuccess() {
  notify({ message: "SUCCESS" });
}

export function onError() {
  notify({ message: "ERROR" });
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}

export function postOrder(variety, quantity) {
  orderFromGrocer(
    {
      variety: variety,
      quantity: quantity,
    },
    onSuccess,
    onError
  );
}
