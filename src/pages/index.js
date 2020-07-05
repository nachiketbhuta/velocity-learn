import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Topic from '../components/topic'
import Card from '../components/card'

const BlogIndex = ({data, location}) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
    <SEO title="Topics" />

    <h3>List of Topics</h3>
    <ul>
      <li> 
      <Link
        to={`/graphs`}
      >
        Graph Theory
      </Link>
      </li>
      <li> 
      <Link
        to={`/dynamic-programming`}
      >
        Dynamic Programming
      </Link>
      </li>
    </ul>
    
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
