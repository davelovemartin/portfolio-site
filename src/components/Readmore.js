import * as React from "react";
import Box from "./Box";
import Center from "./Center";

import * as styles from "./Readmore.module.scss";

const Readmore = () => (
  <div className={styles.readmore}>
    <Center>
      <Box>
        <p>
          read more <span>↓</span>
        </p>
      </Box>
    </Center>
  </div>
);

export default Readmore;
