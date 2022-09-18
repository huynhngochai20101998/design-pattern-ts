import { DuckStrategy, Strategy } from "./Stategy";

class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class HomeDuck implements DuckStrategy {
  orther(): void {
    this.eat();
  }
  quack(): string {
    return "HomeDuck is quacking.";
  }
  swim(): string {
    return "HomeDuck is swimming.";
  }
  display(): string {
    return "HomeDuck";
  }
  eat(): string {
    return "eat on the sky.";
  }
}

export { ConcreteStrategyA, HomeDuck };
