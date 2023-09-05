import React from 'react'
import './contact.css'
import MapComponent from './MapComponent';
const Contact = () => {
  return (
    <section className='contact'>
      <div className="content">
        
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us!</p>
        <MapComponent />

      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i class="bi bi-geo-alt-fill"></i></div>
            <div className="text">
              <h3>Address</h3>
              <p>4671 Sugar Camp,<br />Owantana,Minnesota, <br />55060 </p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="bi bi-telephone-fill"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>507-248-1186</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="bi bi-envelope-at-fill"></i></div>
            <div className="text">
              <h3>E-mail</h3>
              <p>rdealin@hgdr.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="">
            <h2>Send</h2>
            <div className="inputBox">
              <span>Name</span>
              <input type="text" name='' required />

            </div>
            <div className="inputBox">
              <span>Email</span>
              <input type="text" name='' required />

            </div>
            <div className="inputBox">
              <span>Type your message</span>
              <input type="text" name='' required />

            </div>
            <div className="inputBox">
              <input type="submit" name='' value='Send' />

            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact