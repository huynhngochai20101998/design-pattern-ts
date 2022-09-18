import { DuckStrategy, Strategy } from "./Stategy";

class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

class MarllardDuck implements DuckStrategy {
  orther(): void {
    this.fly();
  }
  quack(): string {
    return "MarllardDuck is quacking.";
  }
  swim(): string {
    return "MarllardDuck is swimming.";
  }
  display(): string {
    return "MarllardDuck.";
  }
  fly(): string {
    return "fly on the sky.";
  }
}

export { ConcreteStrategyB, MarllardDuck };
