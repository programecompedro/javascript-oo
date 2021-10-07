class Cliente {
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo < valor){
            return console.log("Valor é maior do que seu saldo")
        } else {
            return console.log(this.saldo - valor)
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Pedro";
cliente1.cpf = 12345678904

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 98765432145

const contaCorrentePedro = new ContaCorrente()
contaCorrentePedro.saldo = 0;
contaCorrentePedro.agencia = 0001;
contaCorrentePedro.saldo = 200
console.log(contaCorrentePedro.saldo)
contaCorrentePedro.sacar(100);

console.log(cliente1)
console.log(cliente2)