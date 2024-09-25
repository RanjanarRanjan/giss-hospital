import React from "react";
import "../components/css/Style.css"
import Button from "../components/Button";
const Sectionthree = () => {
    const handleClick = (button) => {
        console.log(`${button} clicked!`);
      };
  return (
    <div>
    <div className="section3">
      <div className="events">
        <div class="giss-hospital-heading">
          <h6>Giss Hospital</h6>
        </div>
        <h1>News & Events</h1>
        <div className="event-img">
            <div>
                <img src="e-i-1.png" alt="img1" />
                <p>WELLNESS  - JAN 24, 2020</p>
                <h4>Can meditation banish back pain?</h4>
            </div>
            <div>
            <img src="e-i-2.png" alt="img2" />
                <p>FITNESS  - JAN 25, 2020</p>
                <h4>The latest on exercise and sleep</h4>
            </div>
            <div>
            <img src="e-i-3.svg" alt="img3"/>
                <p>FITNESS  - JAN 25, 2020</p>
                <h4>Can meditation banish back pain?</h4>
            </div>
        </div>
        <Button
              onClick={() => handleClick("Button 1")}
              className="Button-1"
              imgSrc="arrow-right.svg"
              imagePosition="right"
              label="View More"
            />
      </div>
    </div>
    <div className="section3">
      <div className="events">
        <div class="giss-hospital-heading">
          <h6>Giss Hospital</h6>
        </div>
        <h1>Management Teams </h1>
        <div className="team-img">
            <img src="Team Section 1.svg" alt="team"/>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Sectionthree;
