export class ContaCorrente {
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
            return valor
        }
    }
}