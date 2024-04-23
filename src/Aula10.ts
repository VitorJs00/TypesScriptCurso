//type MarcaTenis = "nike" | "adidas" | "newBallance";
enum MarcaTenis {
  //Declara Tipos que MarcaTenis Pode ser:
  NIKE = "nike",
  ADIDAS = "adidas",
  NEWBALANCE = "newballance",
}

interface Tenis {
  //Cria uma interce com um tipo marcatenis que recebe Marcatenis
  marcatenis: MarcaTenis;
}

const TENIS: Tenis = {
  //Uma constante TENIS recebe a interface Tenis
  marcatenis: MarcaTenis.NIKE,
  //Declara que marcatenis é do tipo NIKE, declarado na interface em marcatenis
};

if (TENIS.marcatenis === MarcaTenis.NIKE) {
  //Se o tenis for nike:
  console.log("é nike");
}
