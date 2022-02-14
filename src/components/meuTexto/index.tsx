import React from "react";
import styles from "./styles.module.scss";

type myTextProps = {
  texto: string;
  time: string;
};

const MeuTexto = ({ texto = "", time = "" }: myTextProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.bottom__bubble} />
      {texto}
    </div>
  );
};

export default MeuTexto;
