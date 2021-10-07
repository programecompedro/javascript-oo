class Cliente {
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    _saldo = 0;
    
    depositar(valor){
        if (valor > 0) {   
            this._saldo += valor         
            console.log("Você depositou: ", this._saldo)
            return this._saldo
        } else {
            console.log("Você não pode depositar valores negativos")
        }
    }
    sacar(valor) {
        if (this._saldo < valor){
            return console.log("Não pode sacar um valor maior que seu _saldo")
        } else {
            this._saldo -= valor
            console.log("Você sacou: ", valor)
            console.log("Saldo Atual: ", this._saldo)
            return this._saldo
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
contaCorrentePedro.agencia = 0001;

contaCorrentePedro.depositar(500);
contaCorrentePedro.sacar(233);

console.log(contaCorrentePedro)