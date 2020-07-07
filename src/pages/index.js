import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="Topics" />

        <div className="mobile:p-6 tablet:p-6 mt-10">
          <h3 className="font-sans text-xl mobile:text-2xl tablet:text-2xl laptop:text-2xl desktop:text-2xl text-black-900 leading-tight">
            List of Topics
          </h3>
          <div className="pl-8">
            <ul className="mt-6">
              <Link to={`/graphs`}>
                <li className="text-xl">Graph Theory</li>
              </Link>
              <Link to={`/trees`}>
                <li className="text-xl">Trees</li>
              </Link>
              <Link to={`/dynamic-programming`}>
                <li className="text-xl">Dynamic Programming</li>
              </Link>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
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
