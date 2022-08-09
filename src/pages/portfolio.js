import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioPage = (props) => {
  const { data } = props;
  return (
    <Layout title="Portfolio">
      <ul>
        {data.allContentfulProject.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <GatsbyImage
              image={getImage(node.image)}
              alt={"Mock up of " + node.title}
              loading="lazy"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: node.detail.childMarkdownRemark.html,
              }}
            />
            <hr />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PortfolioPage;

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
  query PortfolioQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        siteUrl
      }
    }
    allContentfulAsset {
      edges {
        node {
          id
          title
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          id
          title
          image {
            id
            title
            gatsbyImageData(layout: CONSTRAINED)
          }
          detail {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
