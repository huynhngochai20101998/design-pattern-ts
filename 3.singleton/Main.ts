import { Singleton } from "./Singleton";

function clientCode() {
  const s1 = Singleton.getEagerInitializedInstance();
  const s2 = Singleton.getEagerInitializedInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientCode();
