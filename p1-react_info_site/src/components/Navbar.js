import React from "react"

import ReactLogo from "../react-logo-small.png"

export default function Navbar() {
  return (
    <nav>
      <img src={ReactLogo} alt="logo" className="nav--icon"/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

