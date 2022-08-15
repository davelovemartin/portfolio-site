import * as React from "react";
import { useRef } from "react";
import * as styles from "./Container.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { BgImage } from "gbimage-bridge";

const Container = (props) => {
  const { children } = props;
  const bgRef = useRef();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "mike-dierken-Oztfs3ky4Xk-unsplash.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            transformOptions: { fit: CONTAIN }
          )
        }
      }
    }
  `);
  const imageData = data.placeholderImage.childImageSharp.gatsbyImageData;
  const bgImage = getImage(imageData);
  return (
    <div ref={bgRef} className={styles.container}>
      <BgImage
        onStartLoad={() => bgRef.current?.classList.toggle("loading")}
        onLoad={() => {
          bgRef.current?.classList.toggle("loading");
          return bgRef.current?.classList.toggle("loaded");
        }}
        image={bgImage}
      >
        {children}
      </BgImage>
    </div>
  );
};

export default Container;
