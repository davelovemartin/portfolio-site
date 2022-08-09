const path = require(`path`);
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query PostBuildQuery {
      allContentfulPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allContentfulPost.edges.map(({ node }) => {
    console.log(node.slug);
    createPage({
      path: "/journal/" + node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug,
        id: node.id + "articleTextNode >>> MarkdownRemark",
      },
    });
  });
};
