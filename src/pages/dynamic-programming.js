import React from 'react'
import { Link, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import logo from '../../content/assets/logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'


const DPIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Dynamic Programming" />
        <h3>Dynamic Programming Topics</h3>
        {posts.map(({ node }) => 
          <Card node={node} title={node.frontmatter.title || node.fields.slug} />
        )}
      </Layout>
    )
}

export default DPIndex

export const pageQuery = graphql`
query DPIndex {
    site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/dynamic-programming/"}}, sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            excerpt
              timeToRead
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
                description
                author
              }
          }
        }
      }
   
 }
`