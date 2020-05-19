const path = require('path');

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('./src/templates/project-post.jsx');

  const res = await graphql(`
        query {
            allContentfulStudentPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

  res.data.allContentfulStudentPost.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
