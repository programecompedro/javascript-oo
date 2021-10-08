import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0
    agencia;

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

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

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