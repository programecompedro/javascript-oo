import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"



const cliente1 = new Cliente();

cliente1.nome = "Pedro";
cliente1.cpf = 12345678904

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 98765432145

const contaCorrentePedro = new ContaCorrente()

contaCorrentePedro.agencia = 1001;

contaCorrentePedro.depositar(500);
let valorsacado = contaCorrentePedro.sacar(233);

console.log(valorsacado)
console.log(contaCorrentePedro)