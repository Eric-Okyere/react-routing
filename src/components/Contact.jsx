import React from 'react'
import {Link} from "react-router-dom"

function Contact() {
  return (
    <div>
    <h1>Contact</h1>
    <p>Ive subscribed to Paramount+ but cannot login to my account on my TV. I can access the account but I’m asked to “try it free” or sign in. When trying to sign in, I’m offered two options. “On my TV</p>
    <Link to="/contact/:id">Service Details</Link>
    </div>
  )
}

export default Contact