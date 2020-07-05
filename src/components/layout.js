import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import logo from "../../content/assets/logo.png"

import { useMediaQuery } from "react-responsive"

const styles = {
  header: {
    display: `flex`,
    margin: `auto`,
  },
  link: {
    display: `flex`,
    justifyContent: `center`,
    boxShadow: `none`,
    color: `inherit`,
  },
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  if (location.pathname === rootPath) {
    header = (
      <Link style={styles.link} to={`/`}>
        <img
          src={logo}
          style={{
            ...scale(0.4),
            maxWidth: isTabletOrMobile ? "55%" : "35%",
            marginTop: 0,
            marginBottom: isTabletOrMobile ? `15%` : `10%`,
          }}
        />
      </Link>
    )
  } else {
    header = (
      <Link style={styles.link} to={`/`}>
        <img
          src={logo}
          style={{
            ...scale(0.4),
            maxWidth: isTabletOrMobile ? "55%" : "35%",
            marginTop: 0,
            marginBottom: isTabletOrMobile ? `14%` : `8%`,
          }}
        />
      </Link>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(31),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header style={styles.header}>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
