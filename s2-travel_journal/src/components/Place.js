import React from "react"

import Ping from '../ping.png'

export default function Place(props) {
  return (
    <div className="place">
      <img src={props.data.imageUrl} className="place--img" />
      <div className="place--container">
        <div className="place--info">
          <img src={Ping} alt="Ping"/>
          <p>{props.data.location}</p>
          <a href={props.data.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="place--title">{props.data.title}</h1>
        <h3 className="place--date">{props.data.startDate} - {props.data.endDate}</h3>
        <p className="place--description">{props.data.description}</p>
      </div>
    </div>
  )
}