import React from "react"

import Image from '../images/ease.jpeg'
import EmailLogo from '../images/Mail.png'
import LinkedinLogo from '../images/linkedin.png'

export default function Info() {
  return (
    <section className="info">
      <img className="info--image" src={Image} alt="profile"/>
      <div className="info--text">
        <h1>Kohei Nishikawa</h1>
        <h2>Currently Studying React!</h2>
        <p>This is My First Solo Project</p>
        <div className="info--links">
          <a href="http://gmail.com" className="info--links_mail">
            <img src={EmailLogo} alt="email_logo" />
            <span>Email</span>
          </a>
          <a href="http://linkedin.com" className="info--links_linkedin">
            <img src={LinkedinLogo} alt="linkedin_logo" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}