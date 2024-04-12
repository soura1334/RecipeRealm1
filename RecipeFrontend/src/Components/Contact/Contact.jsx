import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact With Us</h1>
      <p>We would love to respond to your queries.Feel free to get in touch with us.</p>
      <div class="contact-box">
        <div class="contact-left">
          <h3>Send your request</h3>
          <form>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name Here" />
              </div>
              <div class="input-group">
                <label>Pnone No.</label>
                <input type="text" placeholder="Your Contact No." />
              </div>
              <div class="input-group">
                <label>E-mail</label>
                <input type="text" placeholder="Your E-mail" />
              </div>
              <div class="input-group">
                <label>Message</label>
                <textarea rows="10" placeholder="Your message here"></textarea>
              </div>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
        <div class="contact-right">
          <h3>Reach Us</h3>
          <table>
            <tr>
              <td>E-mail</td>
              <td>contactus@example.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+1 23456789</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>#245,7th floor,2nd cross<br />
                Some road,Some place,XYZ<br />
                Kolkata,7XX XXX</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contact
