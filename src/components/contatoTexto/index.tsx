import React from "react";
import styles from "./styles.module.scss";

type contactTextProps = {
  texto: string;
  time: string;
};

const ContatoTexto = ({ texto = "", time = "" }: contactTextProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.bottom__bubble} />
      {texto}
    </div>
  );
};

export default ContatoTexto;
