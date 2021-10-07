import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Julio", "48756778855");
const cliente2 = new Cliente("Julia", "98765432145");
const cliente3 = new Cliente("Jinx", "9911565478");

const conta1 = new ContaCorrente(4000,cliente1)
const conta2 = new ContaCorrente(4000,cliente2)
const conta3 = new ContaCorrente(5454,cliente3)

console.log(conta1) //Exibe dados da conta
console.log(conta2) //Exibe dados da conta
console.log(conta3) //Exibe dados da conta

console.log(ContaCorrente.numeroDeContas) //3









