import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

import { useMediaQuery } from "react-responsive"

const GraphIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark.edges

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const emptyQuery = ""
  const [state, setState] = useState({ filteredData: [], query: emptyQuery })

  const handleInputChange = event => {
    const query = event.target.value // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || [] // return all filtered posts
    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setState({
      query,
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Graph Theory Topics" />

      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          flexDirection: isTabletOrMobile ? `column` : `row`,
        }}
      >
        <h3>Graph Theory Algorithms</h3>

        <input
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
          style={{
            marginBottom: `20px`,
          }}
        />
      </div>

      {posts.length > 0
        ? posts.map(({ node }) => (
            <Card
              node={node}
              title={node.frontmatter.title || node.fields.slug}
            />
          ))
        : `No topics available`}
    </Layout>
  )
}

export default GraphIndex

export const pageQuery = graphql`
  query GraphIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/graphs/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
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
