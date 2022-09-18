import { CaffeineBeverage } from "./CaffeineBeverage";
import { Coffee } from "./Coffee";
import { Tea } from "./Tea";

function clientCode(CaffeineBeverage: CaffeineBeverage) {
  CaffeineBeverage.templateMethod();
}

let client = "coffee";

if(){
  clientCode(new Coffee());
  console.log("");
}


clientCode(new Tea());
