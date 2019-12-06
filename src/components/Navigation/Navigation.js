import React from "react"
import logo from "../../images/logo.png"

const navigation = () => {
  return (
    <div>
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://pedagogicznaporadnia.pl">
            <img
              src={logo}
              alt="Pedagogiczna Pora Dnia: Września"
              width="28"
              height="28"
            />
            <span>Pedagogiczna Pora Dnia</span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default navigation
