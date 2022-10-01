import React from 'react'
import './AboutUs.css'
// import { FontAwesomeIcon } from "react-icons/ai";

function AboutUs() {
  return (
    <div className='About_frame'>
        <div className='frame_one'>
            <h1 className='About_head'>About Us </h1>
            <h3 className='About_content'>Maple event and Banquet hall , a Leicester based wedding planning and event management provider, specializes in the
creation of celebrations that are unique, personalized and elegant. Maple event and Banquet hall
Services is one of the best wedding organizers with the specialization of many
themes according to the needs of the client.</h3>
            <div className='frame_one_section'>
                <div className='frame_section_one'>
                    <h2 className='frame_section_one_head'>Our Mission </h2>
                    <h5 className='frame_section_one_content'>personalized and elegant. Maple event and Banquet hall
Services is one of the best wedding organizers with</h5>

                </div>
                <div className='frame_section_one'>
                  <h2 className='frame_section_one_head'>Our Vision</h2>
                  <h5 className='frame_section_one_content'>personalized and elegant. Maple event and Banquet hall
Services is one of the best wedding organizers with</h5>


                </div>

            </div>
           

        </div>
        <div className='frame_two_section'>
            <img src="./Images/wedding-1854074_640.jpg" alt="" />

        </div>
      
    </div>
  )
}

export default AboutUs
