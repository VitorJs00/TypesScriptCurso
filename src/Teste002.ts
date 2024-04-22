interface JuntarStrings {
  funcao: (nome: string, sonbrenome?: string) => string;
  funcao2: (n1: number, n2: number) => number;
  funcao3: (algo1: string, algo2: string) => boolean;
}

const Returnboolean = (algo1: string, algo2: string) => {
  if (algo1.length < algo2.length) {
    return true;
  } else {
    return false;
  }
};

const funcaosomar = (n1: number, n2: number) => {
  return n1 + n2;
};

const funcaojuntarstring = (nome: string, sonbrenome?: string): string => {
  return nome + sonbrenome;
};

const teste: JuntarStrings = {
  funcao: funcaojuntarstring,
  funcao2: funcaosomar,
  funcao3: Returnboolean,
};

console.log(teste.funcao("vitor___"));
console.log(teste.funcao2(1, 9));
console.log(teste.funcao3("ola", "tudo bom"));
