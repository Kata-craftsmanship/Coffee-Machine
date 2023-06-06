import { DrinkOrder, NumberOfSugars } from "./types";

type CoffeeMachineLogic = {
  makeCoffee: (nbOfSuggar: NumberOfSugars) => DrinkOrder;
  makeTea: (nbOfSuggar: NumberOfSugars) => DrinkOrder;
  makeChocolate: (nbOfSuggar: NumberOfSugars) => DrinkOrder;
  sendMessage: (message: String) => DrinkOrder;
};

export function createCoffeeMachineLogic(): CoffeeMachineLogic {
  return {
    makeCoffee: (nbOfSuggar) => "C:2:0",
    makeTea: (nbOfSuggar) => "T:1:0",
    makeChocolate: (nbOfSuggar) => "H::",
    sendMessage: (nbOfSuggar) => "M:message-content",
  };
}
