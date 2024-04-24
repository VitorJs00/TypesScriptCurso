class Estado {
  nome: string;
  cep: number;
  Cidade: ExemploDeCidade[];

  adicionarCidade(RecebeCidades: ExemploDeCidade) {
    this.Cidade.push(RecebeCidades);
  }

  constructor(nome: string, cep: number) {
    this.nome = nome;
    this.cep = cep;
    this.Cidade = [];
  }
}

class ExemploDeCidade {
  nome: string;
  cep: number;
  constructor(nome: string, cep: number) {
    this.nome = nome;
    this.cep = cep;
  }
}
const cit = new Estado("bh", 999);
const cidade1 = new ExemploDeCidade("teste", 1);
const cidade2 = new ExemploDeCidade("teste", 2);
const cidade3 = new ExemploDeCidade("teste", 3);
const cidade4 = new ExemploDeCidade("teste", 4);
const cidade5 = new ExemploDeCidade("teste", 5);

cit.adicionarCidade(cidade1);
cit.adicionarCidade(cidade2);
cit.adicionarCidade(cidade3);
cit.adicionarCidade(cidade4);
cit.adicionarCidade(cidade5);

console.log(cit);
