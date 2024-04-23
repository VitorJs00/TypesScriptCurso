const FuncaoCallback = (valor: number): void => {
  console.log("DEU BOM" + valor);
};

const FuncaoTeste2 = (valor1: number, valor2: number, callback: (n: number) => void): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }

  return "";
};

FuncaoTeste2(4, 2, FuncaoCallback);
FuncaoTeste2(9, 5, (x: number) => {
  console.log("OUTRA FUNCAO" + x);
});
