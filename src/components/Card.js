import * as React from "react";

import * as styles from "./Card.module.scss";

const Card = (props) => {
  const { children } = props;
  return <li className={styles.card}>{children}</li>;
};

export default Card;
