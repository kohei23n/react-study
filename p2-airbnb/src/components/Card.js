import React from "react"

import Star from '../star.png'


export default function Card(props) {
  return (
      <div className="card">
        <img src={`../images/${props.img}`} alt="image" className="card--image"/>
        <div className="card--stats">
          <img src={Star} alt="star" className="card--star"/>
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount})・</span>
          <span className="gray">{props.country}</span>
          <span></span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price} / person</span></p>
      </div>
  )
}