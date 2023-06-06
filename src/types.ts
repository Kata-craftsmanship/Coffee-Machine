export type Drink = "T" | "C" | "H";

export type NumberOfSugars = 1 | 2;

export type Stick = 0 | "";

export type DrinkOrder =
  | `${Drink}:${NumberOfSugars | ""}:${Stick}`
  | `M:${string}`;
