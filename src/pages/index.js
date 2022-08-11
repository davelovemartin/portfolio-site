import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

const IndexPage = () => (
  <Layout
    title="Hello, World!"
    subtitle={[
      "I'm Dave Lovemartin, a Creative Technologist from Bristol, UK.",
      "I specialise in designing and developing hi-fidelity prototypes for usability testing.",
    ]}
  >
    <p>
      I've forged a career at the intersection of design and web development ✨
    </p>
    <p>
      I advocate{" "}
      <a href="https://www.interaction-design.org/literature/article/a-simple-introduction-to-lean-ux">
        Lean UX
      </a>
      , thriving in collaborative environments where my empathy helps bring out
      the best in my team.
    </p>
    <p>
      As an experience designer, I've conducted user and stakeholder interviews,
      led ideation workshops and presented to clients.
    </p>
    <p>Flexing my Frontend Engineering skills, I pride myself on:</p>

    <ul>
      <li>writing well-formed semantic HTML,</li>
      <li>styling with CSS (and Sass), and </li>
      <li>
        enhancing with JavaScript (including React and Typescript Frameworks).
      </li>
    </ul>
    <p>I champion inclusive design and web accessibility.</p>
    <hr />
    <p>
      I love playing guitar, drinking good coffee and trail running... but not
      at the same time.
    </p>
    <p>
      Check out my <Link to="/resume/">Resumé</Link>, my{" "}
      <Link to="/portfolio/">Portfolio</Link> and my{" "}
      <Link to="/journal/">Journal</Link>.
    </p>
  </Layout>
);

export default IndexPage;

export const Head = ({ location, data }) => (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="twitter" content={data.site.siteMetadata.twitter} />
    <meta name="twitter:url" content={`${location.pathname}`} />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
  </>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        siteUrl
      }
    }
  }
`;
