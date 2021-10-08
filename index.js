import { Cliente } from "./Cliente.js"
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente("Julio", "48756778855");
const cliente2 = new Cliente("Julia", "98765432145");

const conta1 = new ContaCorrente(cliente1, 4000)
const conta2 = new ContaPoupanca(1000, cliente2, 4000)

conta1.depositar(100) // deposita 100$ na conta
conta1.sacar(50) // saca 50$ da conta


console.log(conta1) //Exibe dados da conta
console.log(conta2) //Exibe dados da conta









