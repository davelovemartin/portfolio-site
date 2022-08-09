import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const PostPage = (props) => {
  const { data } = props;
  return (
    <Layout title={data.contentfulPost.title}>
      <article
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default PostPage;

export const Head = ({ location, data }) => (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="twitter" content={data.site.siteMetadata.twitter} />
    <meta name="twitter:url" content={`${location.pathname}`} />
  </>
);

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        twitter
        siteUrl
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      slug
      title
      subtitle
    }
    markdownRemark {
      html
    }
  }
`;
