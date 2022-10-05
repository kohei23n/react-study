import React from "react"

import Header from "./components/Header.js"
import Place from "./components/Place.js"

import data from "./data.js"

export default function App() {

  const places = data.map(data => {
    return (
      <Place 
        data={data}
        // img={data.coverImg}
      />
    )
  })

  return (
    <div>
      <Header />
      {places}
    </div>
  )
}