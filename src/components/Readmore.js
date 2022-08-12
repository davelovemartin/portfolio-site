import * as React from "react";
import Center from "./Center";

import * as styles from "./Readmore.module.scss";

const Readmore = (props) => {
  const { children } = props;
  return (
    <div className={styles.readmore}>
      <Center>
        <p>
          {children}
          <span>&#x21d3;</span>
        </p>
      </Center>
    </div>
  );
};

export default Readmore;
