import { assert, describe, expect, it } from "vitest";
import { createCoffeeMachineLogic } from "../src/createCoffeeMachineLogic";

describe("Drink Maker Protocol, first iteration", () => {
  it("Make Tee with one sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0.4);
    //When
    const command = coffeeMachineLogic.makeTea(1);
    //Then
    assert.equal(command, "T:1:0");
  });

  it("Make Tee without sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0.5);

    //When
    const command = coffeeMachineLogic.makeTea();
    //Then
    assert.equal(command, "T::");
  });

  it("Make Chocolate without sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0.5);

    //When
    const command = coffeeMachineLogic.makeChocolate();
    //Then
    assert.equal(command, "H::");
  });

  it("Make Chocolate with 2 sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0.6);

    //When
    const command = coffeeMachineLogic.makeChocolate(2);
    //Then
    assert.equal(command, "H:2:0");
  });
  it("Make Coffee with 2 sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0.6);
    //When
    const command = coffeeMachineLogic.makeCoffee(2);
    //Then
    assert.equal(command, "C:2:0");
  });
  it("Make Coffee without sugar", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0.7);

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

describe("Going into business, second iteration", () => {
  it("Dont make tea if the correct amount is not given", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0);
    //When
    const command = coffeeMachineLogic.makeTea();
    //Then
    assert.equal(command, "M:You need to provide 0.4 €");
  });

  it("Dont make coffee if the correct amount is not given", () => {
    //Given
    const coffeeMachineLogic = createCoffeeMachineLogic();
    coffeeMachineLogic.insertMoney(0);
    //When
    const command = coffeeMachineLogic.makeCoffee();
    //Then
    assert.equal(command, "M:You need to provide 0.6 €");
  });
});
