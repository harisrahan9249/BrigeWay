import React from 'react';
import './Home.css';
import AboutUs from '../Component/AboutUs';
import Ourbuisness from './Ourbuisness';
function Home() {
  return (
   <>
      
  <div className='Home' style={{backgroundImage: `url("./Images/AZ.jpg")`,backgroundRepeat: 'no-repeat', height: '900px' }}>
        
        <div className='Home_section' >
            <h1 className='Home_head'>BRIDGE WAY Ventures</h1>
            <div className='Home_boder'></div>
            <h3 className='Home_content'> one of the best wedding organizers with the specialization of many
  themes according to the needs of the client</h3>
            {/* <button className='Home_Button'>See more</button> */}
            
          
        </div>
        
       
  </div> 
  <AboutUs />
  <Ourbuisness />
   </> 
  )
}

export default Home
