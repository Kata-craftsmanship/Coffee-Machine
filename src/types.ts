export type NumberOfSugars = 1 | 2;

export type Stick = 0 | "";

type Hot = "T" | "C" | "H";
type ExtraHot = `${Hot}h`;

export type Juice = "O";

export type HotDrink = Hot;

export type Drink = HotDrink | Juice;

type JuiceOrder = `${Juice}::`;
type HotDrinkOrder = `${HotDrink}:${NumberOfSugars | ""}:${Stick}`;

export type DrinkOrder = HotDrinkOrder | JuiceOrder | `M:${string}`;
