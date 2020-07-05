import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const styles = {
  card: {
    boxShadow: `0 4px 8px 0 rgba(0,0,0,0.5)`,
    transition: `0.3s`,
    borderRadius: `5px`,
    borderBlockStyle: `1px solid black`,
    padding: `15px 24px`,
    marginBottom: `3%`,
  },
}

const Card = ({ node, title }) => {
  return (
    <article key={node.fields.slug} style={styles.card}>
      <header style={{ marginBottom: `2%` }}>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link
            style={{ boxShadow: `none`, textDecoration: `none` }}
            to={node.fields.slug}
          >
            {title}
          </Link>
        </h3>
        <small>
          {node.frontmatter.date} by {node.frontmatter.author} -{" "}
          {node.timeToRead}
          {node.timeToRead === 1 ? " min read" : " mins read"}
        </small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default Card
