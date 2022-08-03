import React from "react"

import Twitter from '../images/TwitterIcon.png'
import Facebook from '../images/FacebookIcon.png'
import Instagram from '../images/InstagramIcon.png'
import Github from '../images/GitHubIcon.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer--icons">
        <a href="http://twitter.com"><img src={Twitter} alt="Twitter"/></a>
        <a href="http://facebook.com"><img src={Facebook} alt="Facebook"/></a>
        <a href="http://instagram.com"><img src={Instagram} alt="Instagram"/></a>
        <a href="http://github.com"><img src={Github} alt="Twitter"/></a>
      </div>
    </footer>
  )
}