import * as React from "react";
import Center from "./Center";
import * as styles from "./Intro.module.scss";

const Intro = (props) => {
  const { title, subtitle } = props;
  if (subtitle)
    return (
      <div className={styles.intro}>
        <h1>{title}</h1>
        {subtitle.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    );
  return (
    <div className={styles.intro}>
      <Center>
        <h1>{title}</h1>
      </Center>
    </div>
  );
};

export default Intro;
