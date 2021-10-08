import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 1234567978)
diretor.cadastrarSenha("1234")
const gerente = new Gerente("Amberson", 5000, 1234567978)

const estaLogado = SistemaAutenticacao.login(diretor, "1234");

console.log(estaLogado)