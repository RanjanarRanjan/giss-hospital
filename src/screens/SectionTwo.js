import React from 'react'
import Button  from '../components/Button'
const SectionTwo = () => {
    const handleClick = (button) => {
        console.log(`${button} clicked!`);
      };
  return (
    <div className='rest-easy'>
        <h1>Caritas Home Care: Rest Easy, 
        We've Got Your Health Covered.</h1>
        <Button
          onClick={() => handleClick("Button 1")}
          className="Button-3"
          imgSrc="arrow-right.svg"
          imagePosition="right"
          label="View More"
        />
    </div>
  )
}

export default SectionTwo
