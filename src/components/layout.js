import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import logo from '../../content/assets/logo.png'


const styles = {
  logo: {
    maxWidth: `30%`,
    marginTop: 0,
    marginBottom: `5%`
  },
  header: {
    display: `flex`,
    margin: `auto`
  },
  link: {
    display: `flex`,
    justifyContent: `center`,
    boxShadow: `none`,
    color: `inherit`,
  }
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Link
        style={styles.link}
        to={`/`}
      >
        <img src={logo} style={styles.logo}/>
      </Link>
    )
  } else {
    header = (
      
      <Link
        style={styles.link}
        to={`/`}
      >
        <img src={logo} style={styles.logo}/>
      </Link>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(34),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header style={styles.header}>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
