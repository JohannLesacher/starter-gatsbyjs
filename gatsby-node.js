const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  return graphql(`
    {
      allFile(
        filter: {
          internal: {mediaType: {eq: "text/markdown"}},
          sourceInstanceName: {eq: "pages-simples"}
        }
      ){
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                url
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    
    if (result.data) {
      const pagesSimples = result.data.allFile.edges

      pagesSimples.forEach(edge => {
        createPage({
          path: edge.node.childMarkdownRemark.frontmatter.url,
          component: path.resolve(
            `src/components/templates/page-simple.js`
          ),
          context: {
            slug: edge.node.childMarkdownRemark.fields.slug,
          },
        })
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
