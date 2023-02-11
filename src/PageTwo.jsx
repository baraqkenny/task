import React from 'react';
import './PageTwo.css'

const PageTwo = () => {
  return (
    <div className='container'>
      <div className="circle4"></div>
      <div className="content-two">
        <div className="first">
          <h3>Priority Access</h3>
           <div className="line"></div>
          <p>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!</p>
         
        </div>
        <div className="second">
            <h4>Book a Continuation with us</h4>
            <input type="text" className='full-name' placeholder='Enter your full name'/>
            <input type="text" className='full-name' placeholder='Enter your work email'/>
            <input type="text" className='full-name' placeholder='Mobile number'/>
            <input type="text" className='full-name' placeholder='Company Name'/>
            <select className='full-name'>
              <option value="Select Country">Select Country</option>
            </select>
            <textarea className='textarea' name="" id=""  placeholder='Drop a message...' cols="50" rows="10"></textarea>
            <button className='button'>Send Request</button>
          </div>
  </div>
   <hr style={{marginLeft: '60px', marginTop: '10rem'}}/>
      <footer className='footer'>

    <p><ion-icon name="home"></ion-icon>2nd Floor, The Garnet Building, KM14 <br />
    Lekki Epe Expressway, Lagos, Nigeria.</p>
    <h4>Loyalbaze is almost here</h4>
    <p><ion-icon name="call"></ion-icon>+234 903 618 9485</p>
      </footer>
      
    </div>
  )
}

export default PageTwo
