const path = require('path')
import { graphql } from 'gatsby';

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPages } = actions
  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages

}