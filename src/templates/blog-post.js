import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "katex/dist/katex.min.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="mt-8 px-4 pt-1">
        <h3 className="mt-8">{post.frontmatter.title}</h3>
        <header className="flex justify-between items-center">
          <p className="text-gray-800">By {post.frontmatter.author}</p>
          <p className="text-gray-800">{post.frontmatter.date}</p>
        </header>
      </div>
      <article className="text-justify p-4">
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        author
      }
    }
  }
`
