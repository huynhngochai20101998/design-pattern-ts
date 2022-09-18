import { ConcreteStrategyA, HomeDuck } from "./HomeDuck";
import { ConcreteStrategyB, MarllardDuck } from "./MallardDuck";
import { Context, DuckContext } from "./Context";

// const context = new Context(new ConcreteStrategyA());
// console.log("Client: Strategy is set to normal sorting.");
// context.doSomeBusinessLogic();

// console.log("");

// console.log("Client: Strategy is set to reverse sorting.");
// context.setStrategy(new ConcreteStrategyB());
// context.doSomeBusinessLogic();

const homeDuck = new HomeDuck();
const marllardDuck = new MarllardDuck();

let rq = homeDuck;

let context = new DuckContext(rq);
context.doSomeBusinessLogic();

context.setStrategy(marllardDuck);
context.doSomeBusinessLogic();
