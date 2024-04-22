interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const Usuario: Usuarios = {
  cidade: "pintadas",
  pessoas: [
    {
      idade: 19,
      nome: "vitor",
    },
    {
      idade: 18,
      nome: "iara",
    },
    {
      idade: 19,
      nome: "vitor",
    },
  ],
};

console.log(Usuario.pessoas.length);
console.log(Usuario);
