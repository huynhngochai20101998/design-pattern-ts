import { DuckStrategy, Strategy } from "./Stategy";

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    // ...

    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));

    // ...
  }
}

class DuckContext {
  private duckStrategy: DuckStrategy;

  constructor(duckStrategy: DuckStrategy) {
    this.duckStrategy = duckStrategy;
  }

  public setStrategy(duckStrategy: DuckStrategy) {
    this.duckStrategy = duckStrategy;
  }

  public doSomeBusinessLogic(): void {
    console.log("Context: strategy (not sure how it'll do it)");
    const result = `
     ${this.duckStrategy.quack()}
     ${this.duckStrategy.swim()}
     ${this.duckStrategy.display()}
    `;
    console.log(result);
  }
}

export { Context, DuckContext };
