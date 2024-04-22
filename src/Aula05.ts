interface Estado {
  nome: string;
}

interface cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: cidade;
  complemento?: string;
}

const endereco: Endereco = {
  bairro: "centro",
  rua: "8 de marco",
  cidade: {
    nome: "pintadas",
    estado: {
      nome: "bahia",
    },
  },
};

console.log(endereco.complemento?.substring(3) || "deu erro");
console.log(endereco);
