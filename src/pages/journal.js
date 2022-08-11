import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import Stack from "../components/Stack";
import Box from "../components/Box";
import Card from "../components/Card";
import UnmarkedList from "../components/UnmarkedList";

const JournalPage = (props) => {
  const { data } = props;
  return (
    <Layout title="Journal">
      <UnmarkedList>
        <Stack>
          {data.allContentfulPost.edges.map(({ node }) => (
            <Card key={node.id}>
              <Link className="link" to={`/journal/${node.slug}`}>
                <Box>
                  <h2>{node.title}</h2>
                  <p>{node.description}</p>
                </Box>
              </Link>
            </Card>
          ))}
        </Stack>
      </UnmarkedList>
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
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
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
          id
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
