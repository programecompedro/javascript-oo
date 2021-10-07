export class Cliente {
    _cpf;     
    nome;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf
    }
}
