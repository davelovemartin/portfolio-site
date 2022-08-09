import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

const JournalPage = (props) => {
  const { data } = props;
  return (
    <Layout title="Journal">
      <li>
        {data.allContentfulPost.edges.map(({ node }) => (
          <Link to={`/journal/${node.slug}`}>
            <h2>{node.title}</h2>
            <p>{node.description}</p>
          </Link>
        ))}
      </li>
    </Layout>
  );
};

export default JournalPage;

export const Head = ({ location, data }) => (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="twitter" content={data.site.siteMetadata.twitter} />
    <meta name="twitter:url" content={`${location.pathname}`} />
  </>
);

export const query = graphql`
  query JournalQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        siteUrl
      }
    }
    allContentfulPost {
      edges {
        node {
          slug
          title
          description
        }
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
  }
`;
