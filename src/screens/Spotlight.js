import React from 'react'
import "../components/css/Style.css"
import Button from '../components/Button'
const Spotlight = () => {
    const handleClick = (button) => {
        console.log(`${button} clicked!`);
      };
  return (
    <div className='spotlight'>
       <div className='spotlight-main'> 
           <div className='spotlight-left'>
                <h1>Walking in Compassion, Serving <span>with Love</span></h1>
                <p>
                To undertake specialized and holistic healthcare services of world standard <br/>
                and to provide them to all sections To undertake specialized and holistic  <br/>
                healthcare services of world standard  <br/>
                </p>
            <div className='spotlight-button'>
                <Button
              onClick={() => handleClick("Button 1")}
              className="Button-1"
              imgSrc="arrow-right.svg"
              imagePosition="right"
              label="Learn More"
            />
            <Button
              onClick={() => handleClick("Button 1")}
              className="Button-2"
              imgSrc="file-text.svg"
              imagePosition="left"
              label="Book an Appointment "
            />
            </div>
           </div>
           <div className='spotlight-right'>
                <img src='sp-img.svg' alt='sp-img' />
           </div>
       </div>
    </div>
  )
}

export default Spotlight
