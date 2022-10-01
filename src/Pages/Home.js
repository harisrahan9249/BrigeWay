import React from 'react';
import './Home.css';
import AboutUs from '../Component/AboutUs';

function Home() {
  return (
   <>
      
  <div className='Home' style={{backgroundImage: `url("./Images/event-6927353_1280.jpg")` }}>
        
        <div className='Home_section' >
            <h1 className='Home_head'>BRIDGE WAY Ventures</h1>
            <div className='Home_boder'></div>
            <h3 className='Home_content'> one of the best wedding organizers with the specialization of many
  themes according to the needs of the client</h3>
            {/* <button className='Home_Button'>See more</button> */}
            
          
        </div>
        
       
  </div> 
  <AboutUs />

   </> 
  )
}

export default Home
