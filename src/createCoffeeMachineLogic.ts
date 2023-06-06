import { DrinkOrder, NumberOfSugars } from "./types";

type CoffeeMachineLogic = {
  makeCoffee: (nbOfSuggar: NumberOfSugars) => DrinkOrder;
  makeTea: (nbOfSuggar: NumberOfSugars) => DrinkOrder;
  makeChocolate: (nbOfSuggar: NumberOfSugars) => DrinkOrder;
  sendMessage: (message: String) => DrinkOrder;
};

export function createCoffeeMachineLogic(): CoffeeMachineLogic {
  return {
    makeCoffee: (nbOfSuggar) => `C:${nbOfSuggar}:${nbOfSuggar === 0 ? "" : 0}`,
    makeTea: (nbOfSuggar) => `T:${nbOfSuggar}:${nbOfSuggar === 0 ? "" : 0}`,
    makeChocolate: (nbOfSuggar) =>
      `H:${nbOfSuggar}:${nbOfSuggar === 0 ? "" : 0}`,
    sendMessage: (message) => `M:${message}`,
  };
}
