import React from 'react'
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import logo from '../../content/assets/logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'

import { useQueryParam, StringParam } from "use-query-params";

const TopicIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const [foo, setFoo] = useQueryParam("topic", StringParam);
    console.log(foo)
  
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Graph Theory" />
        {posts.map(({ node }) => 
          <Card node={node} title={node.frontmatter.title || node.fields.slug} />
        )}
      </Layout>
    )
}

export default TopicIndex

export const pageQuery = `
query TopicIndex {
    site {
        siteMetadata {
          title
        }
      }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/graphs/"}}) {
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