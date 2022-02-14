import React from "react";
import styles from "./styles.module.scss";

const Pesquisar = () => {
  return (
    <div className={styles.container}>
      <input type="Pesquisar" placeholder="Pesquisar" />
      <i className={"fa fa-Pesquisar " + styles.fasearch}></i>
    </div>
  );
};

export default Pesquisar;
