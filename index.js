import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Pedro";
cliente1.cpf = 12345678904

cliente2.nome = "Alice";
cliente2.cpf = 98765432145

const conta2 = new ContaCorrente()
conta2.cliente = cliente2;
conta2.agencia = 2323;
console.log(conta2)

const conta3 = new ContaCorrente()
conta3.cliente = cliente1;
conta3.agencia = 3030;
conta3.depositar(400)
conta3.transferir(100, conta2)
console.log(conta3.saldo)












