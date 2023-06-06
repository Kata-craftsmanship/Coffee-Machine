import { assert, describe, expect, it } from "vitest";
import { createCoffeeMachineLogic } from "../src/createCoffeeMachineLogic";

describe("Drink Maker Protocol", () => {
  it("Should send message", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeTea(1);
    //Then
    assert.equal(command, "T:1:0");
  });

  it("Should send message", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeChocolate(1);
    //Then
    assert.equal(command, "H::");
  });
  it("Should send message", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeCoffee(2);
    //Then
    assert.equal(command, "C:2:0");
  });
  it("Should send message", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.sendMessage("message-content");
    //Then
    assert.equal(command, "M:message-content");
  });
});
