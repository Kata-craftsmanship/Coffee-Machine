import { Drink, DrinkOrder, NumberOfSugars } from "./types";

type CoffeeMachineLogic = {
  makeCoffee: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeTea: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeChocolate: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  sendMessage: (message: String) => DrinkOrder;
};

export function createCoffeeMachineLogic(): CoffeeMachineLogic {
  const makeDrink = (drink: Drink, nbOfSuggar?: NumberOfSugars): DrinkOrder =>
    `${drink}:${nbOfSuggar ?? ""}:${nbOfSuggar ? 0 : ""}`;

  return {
    makeCoffee: (nbOfSuggar) => makeDrink("C", nbOfSuggar),
    makeTea: (nbOfSuggar) => makeDrink("T", nbOfSuggar),
    makeChocolate: (nbOfSuggar) => makeDrink("H", nbOfSuggar),
    sendMessage: (message) => `M:${message}`,
  };
}
