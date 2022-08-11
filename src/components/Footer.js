import * as React from "react";
import Center from "./Center";
import Logo from "./Logo";
import Flex from "./Flex";

import * as styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <Center>
      <Flex>
        <Logo>
          <a href="https://twitter.com/davelovemartin" rel="me">
            <svg viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
        </Logo>
        <Logo>
          <a href="https://github.com/davelovemartin" rel="me">
            <svg viewBox="0 0 480 512">
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
            </svg>
          </a>
        </Logo>
      </Flex>
    </Center>
    <Center>
      <div class="h-card">
        <p>
          <small>
            <a href="https://www.davelovemartin.com" class="u-url" rel="me">
              Dave Lovemartin
            </a>{" "}
            &copy; 2017 - 2022.
          </small>
        </p>
        <p>
          <small>
            Built with{" "}
            <a target="__blank" href="https://facebook.github.io/react/">
              React
            </a>{" "}
            &amp;{" "}
            <a target="__blank" href="http://gatsbyjs.org/">
              Gatsby.js
            </a>
          </small>
        </p>
      </div>
    </Center>
    <Center>
      <Flex>
        <Logo>
          <a
            href="https://www.contentful.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
              alt="Powered by Contentful"
            />
          </a>
        </Logo>
        <Logo>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/534ab499b9c56e50ea3fc1558b5edffa6d7117f5/df399/static/netlify.ac20e7df.svg"
              alt="Hosted on Netlify"
            />
          </a>
        </Logo>
      </Flex>
    </Center>
  </footer>
);

export default Footer;
