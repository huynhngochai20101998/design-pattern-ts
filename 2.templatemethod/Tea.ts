import { CaffeineBeverage } from "./CaffeineBeverage";

class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log("Tea: brew");
  }
  protected addCondiments(): void {
    console.log("Tea: add condiments");
  }

  protected pourInCup(): void {
    console.log("Tea: pour in cup");
  }
}

export { Tea };
