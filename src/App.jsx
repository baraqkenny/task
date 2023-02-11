import React from 'react'
import PageTwo from './PageTwo'
import './App.css'

function App() {
 
  return (
    <div>
    <div className="App">
    <nav>
      <h1>I yalbase</h1>
  
      <p>Get Priority Access</p>
    </nav>

      <section className="content">
          <div className="circle"></div>
          <div className="second-circle"></div>
          <div className="third-circle"></div>
          <div className="star2"></div>
          <h1>Turn your best customers <br /> into<span style={{color: '#BD3BD2'}}> Loyal fans</span></h1>
          <p>Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.</p>
          <div className="input">
            <div className="input-one">
             <span>
              <input className='name' type="text" placeholder='Tell us your name' />
              </span>
            </div>
            <div className="input-two">
              <input type="email" className='email' placeholder='Enter your email address'/>
            </div>
            <h3 className='btn'>Get early access</h3>
            <div className="arrow1"></div>
            <div className="people">
              <ul>
                <li className='G'>G</li>
                <li className='O'>O</li>
                <li className='U'>U</li>
                <li className='M'>M</li>
              </ul>
              <h4>+57 joined</h4>
            </div>
             
          </div>
      </section>
      
    </div>
    <PageTwo/>
    </div>
  )
}

export default App
