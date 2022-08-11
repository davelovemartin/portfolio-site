import * as React from "react";

import * as styles from "./UnmarkedList.module.scss";

const UnmarkedList = (props) => {
  const { children } = props;
  return <ul className={styles.unmarkedList}>{children}</ul>;
};

export default UnmarkedList;
