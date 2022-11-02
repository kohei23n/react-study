import React from "react"

import TrollFace from '../TrollFace.png'


export default function Navbar() {
  return (
    <header className="header">
      <img src={TrollFace} className="header_image" />
      <h2 className="header_title">Meme Generator</h2>
      <h4 className="header_project">React Course - Project 3</h4>
    </header>
  )
}