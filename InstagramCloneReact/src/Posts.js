import React from "react";
export default function Posts() {
  const posts = [
    {
      usuario: "meowed",
      imagemUsuario: "assets/img/meowed.svg",
      imagemConteudo: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      imagemCurtida: "assets/img/respondeai.svg",
      numeroCurtidas: "101.523",
    },
    {
      usuario: "barked",
      imagemUsuario: "assets/img/barked.svg",
      imagemConteudo: "assets/img/dog.svg",
      curtidoPor: "adorable_animals",
      imagemCurtida: "assets/img/adorable_animals.svg",
      numeroCurtidas: "99.159",
    },
    {
      usuario: "meowed",
      imagemUsuario: "assets/img/meowed.svg",
      imagemConteudo: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      imagemCurtida: "assets/img/respondeai.svg",
      numeroCurtidas: "101.523",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post
          key={index}
          usuario={post.usuario}
          imagemUsuario={post.imagemUsuario}
          imagemConteudo={post.imagemConteudo}
          curtidoPor={post.curtidoPor}
          imagemCurtida={post.imagemCurtida}
          numeroCurtidas={post.numeroCurtidas}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const {
    usuario,
    imagemUsuario,
    imagemConteudo,
    curtidoPor,
    imagemCurtida,
    numeroCurtidas,
  } = props;

  const [salvo, setSalvo] = React.useState(false);

  function toggleSalvar() {
    setSalvo(!salvo);
  }

  const [like, setLike] = React.useState(false);
  const [curtidas, setCurtidas] = React.useState(
    Number(numeroCurtidas.replace(".", "").replace(",", ".")) 
  );

  function likesPost() {
    setLike(!like);
    if (!like) {
      setCurtidas(curtidas + 1);
    } else {
      setCurtidas(curtidas - 1);
    }
  }

  function likesPostImagem() {
    if (!like) {
      setLike(true);
      setCurtidas(curtidas + 1);
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagemUsuario} />
          {usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img src={imagemConteudo} onClick={likesPostImagem} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={like ? "heart" : "heart-outline"}
              onClick={likesPost}
              className="liked"
              style={{ color: like ? "red" : "" }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salvo ? "bookmark" : "bookmark-outline"}
              onClick={toggleSalvar}
              className="bookmark"
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={imagemCurtida} alt={curtidoPor} />
          <div className="texto">
            Curtido por
            <strong>{curtidoPor}</strong> e {""}
            <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
