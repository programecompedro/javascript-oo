import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const cliente = new Cliente("Jair", 48765778999)
cliente.cadastrarSenha("1234")

const diretor = new Diretor("Rodrigo", 10000, 1234567978)
diretor.cadastrarSenha("1234")
const gerente = new Gerente("Amberson", 5000, 1234567978)
gerente.cadastrarSenha("4321")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "4321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)