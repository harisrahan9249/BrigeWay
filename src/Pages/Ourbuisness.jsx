import React from 'react'
import './Ourbuisness.css';
import { useNavigate } from "react-router-dom";

function Ourbuisness() {
    const navigate = useNavigate();
    const routeChange = () =>{ 
      navigate('/MappleEvent')
  
    }
    const routeconsult = () =>{ 
      navigate('/Consulting')
  
    }
  return (
    <div>
        <div className='businesses_section'>
            <h1>our businesses</h1>
        </div>
        <div className='card_section'>
            <div className='card_one'>
                <img src="./Images/wedding-4641674_640.jpg" alt="images" />
                <h3>Maple Event</h3>
                <h5>one of the best wedding organizers with the specialization of many
  themes according to the needs of the client</h5>
                <button onClick={routeChange} className='card_btn'>See More</button>
            </div>
            <div className='card_one'>
                <img src="./Images/consulting-3031678_640.jpg" alt="images" />
                <h3>BridgeWay Consulting</h3>
                <h5>one of the best wedding organizers with the specialization of many
  themes according to the needs of the client</h5>
                <button onClick={routeconsult} className='card_btn'>See More</button>
            </div>
            <div className='card_one'>
                <img src="./Images/education-4796952_640.jpg" alt="images" />
                <h3>BridgeWay Education</h3>
                <h5 className='card_content'>one of the best wedding organizers with the specialization of many
  themes according to the needs of the client</h5>
                <button className='card_btn1'>See More</button>
            </div>
        </div>
      
    </div>
  )
}

export default Ourbuisness
