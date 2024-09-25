import React from "react";
import "../components/css/Style.css";
import Button from "../components/Button";

const Section = () => {
  const handleClick = (button) => {
    console.log(`${button} clicked!`);
  };
  return (
    <div>
      <div className="top">
        <h1>
          Making a connection between
          <br />
          happiness and <span>health</span>
        </h1>
        <p>
          Your health is our priority. Giss Hospital ensures you and your family
          receive the best possible medical care and <br />
          assistance. We strive to create a warm and safe healing environment
          for you and your family.
        </p>
        <div className="container">
          <div>
            <p id="green">50+</p>
            <p>Departments</p>
          </div>
          <div>
            <p id="orange">200+</p>
            <p>Expert Doctors</p>
          </div>
          <div>
            <p id="blue">3000+</p>
            <p>Dedicated Professionals</p>
          </div>
          <div>
            <p id="red">30+</p>
            <p>Medical Services</p>
          </div>
        </div>
        <Button
          onClick={() => handleClick("Button 1")}
          className="Button-2"
          imgSrc="arrow-right (1).svg"
          imagePosition="right"
          label="About Us "
        />
      </div>
      <section class="middle-section">
        <div class="image-container">
          <img src="img1.svg" alt="Patient Care" className="side-image1" />
          <img
            src="img3.svg"
            alt="Medical Consultation"
            className="center-image"
          />
          <img src="img2.svg" alt="Doctor's Team" className="side-image" />
        </div>
      </section>
      <section class="why-choose-us">
        <div class="giss-hospital-heading">
          <h6>Giss Hospital</h6>
        </div>
        <h1>
          Why choose <span>Giss Hospital</span>
        </h1>
        <p id="p1">
          Your health is our priority. Giss Hospital ensures you and your family
          receive the best possible medical care and assistance. We strive to
          create a warm and safe healing environment for you and your family.
        </p>



        <div class="why-choose-icons">
  <div class="icon-item">
    <div class="image-wrapper">
      <img className="icon-img" src="Ellipse 140.png" alt="Accreditations" />
      <img className="small-icon1" src="001.svg" alt="Icon 1" />
      <img className="small-icon2" src="01.svg" alt="Icon 2" />
    </div>
    <p>Accreditations</p>
  </div>
  <div className="sub-icon-item">
    <div class="icon-item">
      <div class="image-wrapper">
        <img className="icon-img" src="Ellipse 140.png" alt="World-Class Doctors" />
        <img className="small-icon3" src="002.svg" alt="Icon 1" />
        <img className="small-icon2" src="02.svg" alt="Icon 2" />
      </div>
      <p>World-Class Doctors</p>
    </div>
    <div class="icon-item">
      <div class="image-wrapper">
        <img className="icon-img" src="Ellipse 140.png" alt="Accessible Healthcare" />
        <img className="small-icon1" src="003.svg" alt="Icon 1" />
        <img className="small-icon2" src="03.svg" alt="Icon 2" />
      </div>
      <p>Accessible Healthcare</p>
    </div>
  </div>
  <div class="icon-item">
    <div class="image-wrapper">
      <img className="icon-img" src="Ellipse 140.png" alt="Safety" />
      <img className="small-icon4" src="004.svg" alt="Icon 1" />
      <img className="small-icon2" src="04.svg" alt="Icon 2" />
    </div>
    <p>Safety</p>
  </div>
</div>





      </section>
    </div>
  );
};

export default Section;
