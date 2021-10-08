export class Cliente {
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
    
    get cpf(){
        return this._cpf;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}
