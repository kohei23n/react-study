import React from "react"

import memesData from "../memesData"


export default function Navbar() {

  function getMemeImage() {
    console.log("Clicked");
    const memesArray = memesData.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form_input" placeholder="Top text" />
        <input type="text" className="form_input" placeholder="Bottom text" />
        <button className="form_button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
    </main>
  )
}