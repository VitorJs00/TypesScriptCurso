interface Andar {
  passos?: number;
  //Passos nao é obrigatorio logo nao prescisa declarar-lo
}

const Andar: Andar = {
  //Aki se declara que passos é um numero ou um undefined
};

const funcaotest = (): number | undefined => {
  //Uma funcao que retorna um Number ou Underfined
  if (Andar.passos && Andar.passos > 5) {
    //Se Passos(underfined)existir, e Passos(num) > 5
    return Andar.passos;
    //Se andar.passos for number:
  }
  return undefined;
  //se Andar.passos for undefined
};

const outronome = funcaotest();

if (outronome) {
  //se Outro nome existir(nao for undefined):
  console.log("Passos Existe e é um numero", outronome);
} else {
  //Se for undefined:
  console.log("Passos Nao existe e é ", outronome);
}
