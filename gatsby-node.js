
const path = require('path')


module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve('./src/templates/project-post.js')

  const res = await graphql(`
          query{
              allContentfulBlogPost{
                  edges{
                      node{
                          slug
                      }
                  }
              }
          }`
      )

res.data.allContentfulBlogPost.edges.forEach((edge)=> {
  createPage ({
      component: projectTemplate,
      path: `projects/${edge.node.slug}`,
      context: {
          slug: edge.node.slug
      }
  })
})
}
