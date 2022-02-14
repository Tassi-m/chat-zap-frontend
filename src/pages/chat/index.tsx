import React from "react";
import Contato from "../../components/contato";
import Pesquisar from "../../components/pesquisar";
import MeuTexto from "../../components/meuTexto";
import ContatoTexto from "../../components/contatoTexto";
import styles from "./styles.module.scss";
import avatar_man from "../../assets/avatar_man.jpg";
import avatar_girl from "../../assets/avatar_girl.jpg";

const Chat = () => {
  const [inputText, setInputText] = React.useState("");
  const [mensagens, setMensagens] = React.useState([
    {
      texto: "Oi, tudo bem?",
      time: "2022-02-13 22:19",
      from: "eu",
    },
    {
      texto: "Oi, sim e com você?",
      time: "2022-02-13 22:20",
      from: "contato",
    },
  ]);

  const contatos = [
    {
      avatar: avatar_girl,
      nome: "Sophia Lúcia Porto",
      status: "online",
      status_texto: "online",
    },
    {
      avatar: avatar_man,
      nome: "Kevin Ruan Iago Fogaça",
      status: "offline",
      status_texto: "online há 50min",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contact__container}>
        <Pesquisar />
        {contatos.map((contato) => {
          return (
            <Contato
              avatar={contato.avatar}
              nome={contato.nome}
              status={contato.status}
              status_texto={contato.status_texto}
            />
          );
        })}
      </div>
      <aside className={styles.chat__container}>
        <div className={styles.container_header}>
          <img src={avatar_girl} alt="" />
          <span className={styles.titulo}>
            <strong>Conversa com Sophia Lúcia Porto</strong>
          </span>
        </div>
        <div className={styles.container__messages}>
          {mensagens.map((message) => {
            return message.from == "eu"
              ? message.texto && (
                  <MeuTexto texto={message.texto} time={message.time} />
                )
              : message.texto && (
                  <ContatoTexto texto={message.texto} time={message.time} />
                );
          })}
        </div>
        <div className={styles.container__input}>
          <input
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            type="textarea"
            placeholder="Escreva sua mensagem"
          />
          <button
            onClick={() => {
              setMensagens([
                ...mensagens,
                {
                  texto: inputText,
                  time: "",
                  from: "eu",
                },
              ]);
              setInputText("");
            }}
          >
            ENVIAR
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Chat;
