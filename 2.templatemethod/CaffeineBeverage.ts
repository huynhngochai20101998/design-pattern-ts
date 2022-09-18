abstract class CaffeineBeverage {
  public templateMethod(): void {
    this.prepareRecipe();
    this.boilWater();
    this.pourInCup();
    this.brew();
    this.addCondiments();
  }

  protected prepareRecipe(): void {
    console.log("AbstractClass: prepareRecipe");
  }

  protected boilWater(): void {
    console.log("AbstractClass: boilWater");
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;
  protected pourInCup(): void {}
}

export { CaffeineBeverage };
