import React from "react"

import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App() {

  const cards = data.map(data => {
    return (
      <Card 
        key={data.id}
        data={data}
        // img={data.coverImg}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // location={data.location} 
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
    )
}