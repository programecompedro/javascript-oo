const numerosPares = [2,4,6,8]
const numerosImpares = [1,3,6,9]
const numeros = [...numerosPares, ...numerosImpares] //   [ 2,4,6,8,1,3,6,9 ]

const [n1, n2, ...outrosNumberos] = [1,2, 3,4,5] // 1 2 [3,4,5]

const [nome1 = "Pedrão"] = [1] // 1
const [nome2 = "Pedrão"] = [] // Pedrão

const pessoa = {
    nome: "Pedro",
    idade: 21 // { nome: 'Pedro', idade: 21 }
}
const pessoaV2 = {
    ...pessoa,
    telefone: 19999888888 // { nome: 'Pedro', idade: 21, telefone: 19999888888 }
}
const nome_pessoa = pessoa.nome // Pedro
const { nome } = pessoa // Pedro - Extraíndo variável do objeto

function imprimeDados({nome, idade}) {
    console.log(nome, idade) // Pedro 21
}

imprimeDados(pessoaV2)

//console.log(nome_pessoa)