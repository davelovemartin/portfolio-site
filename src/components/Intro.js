import * as React from "react";

const Intro = (props) => {
  const { title, subtitle } = props;
  if (subtitle)
    return (
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Intro;
