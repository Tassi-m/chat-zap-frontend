import React from "react";
import styles from "./styles.module.scss";

type ContatoProps = {
  avatar: string;
  nome: string;
  status: string;
  status_texto: string;
};

const Contato = ({
  avatar = "",
  nome = "",
  status = "",
  status_texto = "",
}: ContatoProps) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" />
      <div className={styles.container__description}>
        <span>{nome}</span>
        <div className={styles.container__status}>
          <div
            className={`${styles.status} ${
              status == "online" ? styles.green : styles.orange
            }`}
          />
          <span className={styles.status__text}>{status_texto}</span>
        </div>
      </div>
    </div>
  );
};

export default Contato;
