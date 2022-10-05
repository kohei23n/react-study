import React from "react"

import Logo from "../logo.png"

export default function Header() {
  return (
    <header>
      <img src={Logo} />
      <h1>my travel journal.</h1>
    </header>
  )
}