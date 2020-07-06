import React from "react"
import { Link } from "gatsby"

const Card = ({ node, title }) => {
  return (
    <article key={node.fields.slug}>
      <div className="flex shadow-lg rounded-lg mx-auto tablet:max-w-xl mobile:max-w-md laptop:max-w-2xl my-4 hover:border-l-4 hover:border-indigo-700">
        <div className="flex items-start px-4 py-6 w-full">
          <div className="w-full">
            <div>
              <Link to={node.fields.slug}>
                <h2 className="text-xl font-semibold text-gray-900 -mt-1">
                  {title}
                </h2>
              </Link>
            </div>
            <div className="flex items-center justify-between content-center">
              <span className="text-gray-700">
                By {node.frontmatter.author}
              </span>
              <small className="text-sm text-gray-700">
                {node.frontmatter.date}
              </small>
            </div>
            <p
              className="mt-3 text-gray-700 text-sm"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
            <div className="mt-4 flex items-center">
              <span className="text-md text-gray-700">
                {node.timeToRead}
                {node.timeToRead === 1 ? " min read" : " mins read"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
