import React from "react"
import { Link } from "gatsby"

import logo from "../assets/logo.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Link to={`/`}>
        <div className="flex justify-center mobile:max-w-xs max-w-sm mx-auto mt-5 mobile:p-3">
          <img src={logo} alt="Velocity Learn" />
        </div>
      </Link>
    )
  } else {
    header = (
      <Link to={`/`}>
        <div className="flex justify-center mobile:max-w-xs max-w-sm mx-auto mt-5 mobile:p-3">
          <img src={logo} alt="Velocity Learn" />
        </div>
      </Link>
    )
  }
  return (
    <div className="mx-auto mobile:max-w-md tablet:max-w-xl laptop:max-w-2xl desktop:max-w-2xl">
      <header>{header}</header>
      <main className="markdown">{children}</main>
    </div>
  )
}

export default Layout
