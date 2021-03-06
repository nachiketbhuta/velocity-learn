import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const GraphIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark.edges

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
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="Graph Theory Topics" />

        <div className="mt-8 mb-4 p-4 flex items-center mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row justify-between content-center">
          <h3 className="text-2xl leading-tight mt-3">
            Topics on Graph Theory
          </h3>

          <input
            type="text"
            aria-label="Search"
            placeholder="Type to filter posts..."
            onChange={handleInputChange}
            className="rounded-lg py-2 px-4 border-2 mr-0 mobile:mt-3 text-gray-900 border-indigo-300 bg-gray-100"
          />
        </div>
        <hr />
        <div className="p-4">
          {posts.length > 0
            ? posts.map(({ node }) => (
                <Card
                  node={node}
                  title={node.frontmatter.title || node.fields.slug}
                />
              ))
            : `No topics available`}
        </div>
      </Layout>
    </div>
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
