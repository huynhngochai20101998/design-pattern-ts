import { CaffeineBeverage } from "./CaffeineBeverage";

class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log("Coffee: brew");
  }
  protected addCondiments(): void {
    console.log("Coffee: add condiments");
  }
}

export { Coffee };
