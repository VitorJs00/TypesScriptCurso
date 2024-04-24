class Escola {
  readonly nome: string;
  Alunos: Aluno[];

  constructor(nome: string) {
    this.nome = nome;
    this.Alunos = [];
  }

  adicionaraluno(aluno: Aluno) {
    this.Alunos.push(aluno);
  }
}

class Aluno {
  // eslint-disable-next-line prettier/prettier
  constructor( readonly nome:string) {}
}

const escola = new Escola("nova escola");
const aluno1 = new Aluno("vitor");
const aluno2 = new Aluno("vitor");
const aluno3 = new Aluno("vitor");

escola.adicionaraluno(aluno1);
escola.adicionaraluno(aluno2);
escola.adicionaraluno(aluno3);


console.log(escola)