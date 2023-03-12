import React from 'react'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer_container">
      <div className="left">
        <h1>Atul</h1>
        <h1>Jaiswal</h1>
      </div>
      <div className='mid'>
        <h1>Package Install</h1>
        <h5>1. Bootstrap <br/> 2. Fontawesom <br/> 3. fontawesom svg icon<br/>4. Axios</h5>
      </div>
      <div className="right">
        <ul>
          <li><a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target="blank"><FaWhatsapp/></a></li>
          <li><a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target="blank"><FaLinkedin/></a></li>
          <li><a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target="blank"><FaInstagram/></a></li>
          <li><a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target="blank"><FaFacebook/></a></li>
        </ul>
      </div>
      </div>
      <div className="copyright">
        <p>All <FaCopyright/> Reserved, 2023 Atul Jaiswal</p>
      </div>
    
    </div>
  )
}

export default Footer