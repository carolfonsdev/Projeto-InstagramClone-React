export default function Suggestion() {
  const sugestoes = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
      seguir: "Seguir",
    },
    {
      imagem: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
      seguir: "Seguir",
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
      seguir: "Seguir",
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
      seguir: "Seguir",
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
      seguir: "Seguir",
    },
  ];
    return(
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestoes.map((item,index) => <SugestoesUser imagem={item.imagem} nome={item.nome} razao={item.razao} seguir={item.seguir} key={index}/>)}
        </div>
    )
}

function SugestoesUser(props) {
  const { imagem, nome, razao, seguir } = props;
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagem} alt={nome} />
        <div className="texto">
          <div className="nome">{nome}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>

      <div className="seguir">{seguir}</div>
    </div>
  );
}