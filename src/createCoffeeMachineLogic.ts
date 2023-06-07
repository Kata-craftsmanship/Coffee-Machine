import type {
  Drink,
  HotDrink,
  DrinkOrder,
  NumberOfSugars,
  Juice,
} from "./types";

type CoffeeMachineLogic = {
  makeCoffee: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeTea: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeChocolate: (nbOfSuggar?: NumberOfSugars) => DrinkOrder;
  makeOrangeJuice: () => DrinkOrder;
  sendMessage: (message: string) => DrinkOrder;
  insertMoney: (money: number) => void;
};

type Price = Record<Drink, number>;

const price: Price = {
  T: 0.4,
  H: 0.5,
  C: 0.6,
  O: 0.6,
};
export function createCoffeeMachineLogic(): CoffeeMachineLogic {
  let localMoney = 0;

  const makeDrink = (
    drink: HotDrink,
    nbOfSuggar?: NumberOfSugars
  ): DrinkOrder => {
    const drinkPrice = price[drink] - localMoney;
    if (drinkPrice > 0) {
      return sendMessage(`You need to provide ${price[drink] - localMoney} €`);
    }
    localMoney -= drinkPrice;
    return `${drink}:${nbOfSuggar ?? ""}:${nbOfSuggar ? 0 : ""}`;
  };

  const sendMessage = (message: string): DrinkOrder => `M:${message}`;

  const makeJuice = (juice: Juice): DrinkOrder => {
    const drinkPrice = price[juice] - localMoney;
    if (drinkPrice > 0) {
      return sendMessage(`You need to provide ${price[juice] - localMoney} €`);
    }
    localMoney -= drinkPrice;
    return `${juice}::`;
  };

  return {
    makeCoffee: (nbOfSuggar) => makeDrink("C", nbOfSuggar),
    makeTea: (nbOfSuggar) => makeDrink("T", nbOfSuggar),
    makeChocolate: (nbOfSuggar) => makeDrink("H", nbOfSuggar),
    sendMessage,
    makeOrangeJuice: () => makeJuice("O"),
    insertMoney: (money) => (localMoney += money),
  };
}
