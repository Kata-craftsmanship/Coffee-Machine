import { Drink, DrinkOrder, NumberOfSugars } from "./types";

type CoffeeMachineLogic = {
  makeCoffee: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeTea: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeChocolate: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  sendMessage: (message: string) => DrinkOrder;
  insertMoney: (money: number) => void;
};

type Price = Record<Drink, number>;

const price: Price = {
  T: 0.4,
  H: 0.5,
  C: 0.6,
};
export function createCoffeeMachineLogic(): CoffeeMachineLogic {
  let localMoney = 0;

  const isEnoughMoney = (d: Drink): boolean =>
    localMoney <= 0 || localMoney >= price[d];

  const makeDrink = (drink: Drink, nbOfSuggar?: NumberOfSugars): DrinkOrder =>
    isEnoughMoney(drink)
      ? `${drink}:${nbOfSuggar ?? ""}:${nbOfSuggar ? 0 : ""}`
      : sendMessage(`You need to provide ${price[drink] - localMoney} €`);

  const sendMessage = (message: string): DrinkOrder => `M:${message}`;

  return {
    makeCoffee: (nbOfSuggar) => makeDrink("C", nbOfSuggar),
    makeTea: (nbOfSuggar) => makeDrink("T", nbOfSuggar),
    makeChocolate: (nbOfSuggar) => makeDrink("H", nbOfSuggar),
    sendMessage,
    insertMoney: (money) => (localMoney += money),
  };
}
