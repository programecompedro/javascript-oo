export class Conta { // Classe Abstrata só serve para ser herdada e nunca chamada
    constructor(SaldoInicial, Cliente, Agencia){

        this._saldo = SaldoInicial;
        this._cliente = Cliente;
        this._agencia = Agencia;

        if (this.constructor == Conta){
            throw new Error("Você não deveria instancer um objeto do tipo Conta Diretamente\n É uma classe Abstrata")
        }
    }

    set cliente(cliente){
        if (cliente instanceof Cliente){
            this._cliente = cliente; 
        }
    }

    get cliente(){
        return this._cliente; 
    }

    get saldo(){
        return this._saldo; 
    }

    
    depositar(valor){
        if (valor > 0) {
            this._saldo += valor         
            console.log("Você depositou: ", valor)
            console.log("Saldo atual: ", this._saldo)
            
            
            return this._saldo

        } else {
            console.log("Você não pode depositar valores negativos")
        }
    }

    //Método Abstrato
    sacar(valor) {
        throw new Error("O método Sacar() da conta é abstrato!")
    }

    _sacar(valor, taxa) {
        if (this._saldo > valor){           
            const valorSacado = taxa * valor
            this._saldo -= valorSacado.toFixed(2)
            console.log("Você sacou: ", valorSacado.toFixed(2))
            console.log("Saldo Atual: ", this._saldo)

            return valorSacado.toFixed(2)
        } else {
            console.log("Não pode sacar um valor maior que seu _saldo")
            return 0
        }

        
    }

    transferir(valor, conta){
        if (valor < 1){
            return console.log("Não pode transferir um valor menor que 1 real")
        }else {
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado)
            return conta
        }
    }
}