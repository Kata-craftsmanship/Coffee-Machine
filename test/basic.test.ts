import { assert, describe, expect, it } from "vitest";
import { createCoffeeMachineLogic } from "../src/createCoffeeMachineLogic";

describe("Drink Maker Protocol, first iteration", () => {
  it("Make Tee with one sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeTea(1);
    //Then
    assert.equal(command, "T:1:0");
  });

  it("Make Tee without sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeTea();
    //Then
    assert.equal(command, "T::");
  });

  it("Make Chocolate without sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeChocolate();
    //Then
    assert.equal(command, "H::");
  });

  it("Make Chocolate with 2 sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeChocolate(2);
    //Then
    assert.equal(command, "H:2:0");
  });
  it("Make Coffee with 2 sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeCoffee(2);
    //Then
    assert.equal(command, "C:2:0");
  });
  it("Make Coffee without sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    //When
    const command = coffeeMachineLogic.makeCoffee();
    //Then
    assert.equal(command, "C::");
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
