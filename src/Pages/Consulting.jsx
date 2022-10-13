import React from 'react'
import './Consulting.css'
function Consulting() {
  return (
    <div className='Consulting'  style={{backgroundImage: `url("./Images/different-language-7389469_1920.jpg")`,backgroundRepeat: 'no-repeat', height: '600px' }}>
      <h1 className='Consulting_head'>Bridgeway Consulting</h1>
      <p className='Consulting_content'>BridgewayConsulting was founded in 2011 with the goal of making a business accessible to everyone. We were primarily concerned with delivering business outputs to international clients all over the world. Bridgeway Consulting offers seamless services to help foreign investors establish themselves in the United Kingdom. We are a one-stop shop for those looking to pitch in the United Kingdom.We are excited to meet new people with diverse business ideas. We are onboard for you.
        
      </p>

      <div>
        <div className='purpose_section'>
          <div className='purpose' >
            <h4 className='purpose_head'>Our purpose</h4>
            <p className='purpose_content'>To help create positive, enduring change in the world.
            </p>
          </div>
          <div className='mission'>
            <h4 className='mission_head'> Mission</h4>
            <p className='mission_content'>To help our clients make distinctive, lasting, and substantial improvements in their performance and to build a great firm that attracts, develops, excites, and retains exceptional people 

            </p>

          </div>
        </div>
        <div className='Why_Bridgeway'>
          <h1 className='Why_Bridgeway_head'>Why Bridgeway Consulting</h1>
          <div>
            <h3 className=' Why_Bridgeway_subhead'>Deliver meaningful impact faster with BridgewayConsulting</h3>
            <p className='Why_Bridgeway_content'>Transformation is being transformed — from one-off initiatives to an urgent, purpose-driven imperative. Modern businesses must move faster, but also with more empathy and more openness.

BridgewayConsulting is a new partner for the new rules of modern business. We embrace an open way of working by bringing a diverse set of voices and technologies together. We collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive exponential impact to change how business gets done.

We believe open ecosystems, open technologies, open innovation and open cultures are the key to creating opportunities for modern businesses and for our world.

We want to work together, create together, grow together and rethink what’s possible together.</p>
          </div>

        </div>
        <div className='Services'>
          <h1 className='Services_head'>Services</h1>
          <div className='Services_card'>
            <div className='Services_card1'>
              <img src="./Images/businessman-4914044_640.jpg" alt="Services_card" />
              <h2 className='Services_card_head'>Startup Legal Consulting </h2>
 
            </div>
            <div className='Services_card2'>
              <img src="./Images/businessman-2798562_640.jpg" alt="businessman-2798562_640.jpg" />
              <h2 className='Services_card_head'>Marketing Consulting</h2>
 
            </div>
            <div className='Services_card2'>
              <img src="./Images/businessman-3189794_640.jpg" alt="" />
              <h2 className='Services_card_head'>Operations Consulting</h2>
 
            </div>
            <div className='Services_card2'>
              <img src="./Images/student-849825_640.jpg" alt="" />
              <h2 className='Services_card_head'>Strategic Consulting </h2>
 
            </div>
         </div>

        </div>
      </div>
    </div>
  )
}

export default Consulting
