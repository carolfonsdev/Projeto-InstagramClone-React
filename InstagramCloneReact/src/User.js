import React from "react";
export default function User(){

  const [nome, setNome] = React.useState("");
  
  function mudarNome(){
    const nomeDigitado = prompt("Qual é o seu nome?");
    setNome(nomeDigitado)
  }

  const imagemIncial = "assets/img/catanacomics.svg"
  const [avatar, setAvatar] = React.useState(imagemIncial)

  function mudarPerfil(){
    const perfilMudado = prompt("Cole o link da imagem desejada como perfil!");
    if (perfilMudado && perfilMudado.trim() !== "") {
      setAvatar(perfilMudado);
    }else{
      setAvatar(imagemIncial)
    }
  }


  return(
    <div className="usuario">
      <img src={avatar} alt="imagem de perfil" onClick={mudarPerfil}/>
        <div className="texto">
          <span>
            <strong>{nome === undefined || nome === "" ? "catanacomics" : `${nome}`}</strong>
            <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
          </span>
        </div>
    </div>
  )
}