class outro {
  endereco: string;

  constructor() {
    this.endereco = "";
  }
}

interface carro {
  idade: number | string;
  nome: string;
}

interface Bicicleta {
  rodas: number;
}

const funcao = (validacao: boolean): carro | Bicicleta | outro => {
  if (validacao) {
    return {
      idade: 33,
      nome: "gol",
    };
  }
  return {
    endereco: "RuaAleatoria",
  };
};

const resultado = funcao(false);

if (resultado instanceof outro) {
  console.log("passou por aki");
}

if ("idade" in resultado) {
  if (typeof resultado.idade === "string") {
    console.log(resultado.idade.toUpperCase);
  }
}
if ("idade" in resultado) {
  console.log(resultado.nome);
}

if ("rodas" in resultado) {
  console.log(resultado.rodas);
}
