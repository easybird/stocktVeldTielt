import React, { PropTypes } from "react"
import { Link } from "react-router"
import Svg from "react-svg-inline"

import facebookSvg from "../icons/iconmonstr-facebook-5.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to="/"
        >
          { "Home" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.facebook &&
          <a
            href={ pkg.facebook }
            className={ styles.link }
            target="_new"
          >
            <Svg svg={ facebookSvg } cleanup />
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
