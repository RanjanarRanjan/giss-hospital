import React from "react";
import Button from "../components/Button";
const Footer = () => {
  const handleClick = (button) => {
    console.log(`${button} clicked!`);
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="logo">
          <img src="1 1.svg" alt="logo" />
        </div>
        <Button
          onClick={() => handleClick("Button 1")}
          className="Button-2"
          imgSrc="file-text.svg"
          imagePosition="left"
          label="Book an Appointment "
        />
      </div>
      <hr class="underline" />
      <div className="footer-down">
        <div>
          <h6>Quik Links</h6>
          <a href="#about">Home</a>
          <a href="#about">About Us</a>
          <a href="#about">Management Team</a>
          <a href="#about">Advisory Board</a>
          <a href="#about">Departments</a>
          <a href="#about">News&Events</a>
          <a href="#about">Career</a>
          <a href="#about">Contact Us</a>
        </div>
        <div>
          <h6>Our Departments</h6>
          <a href="#about">General Medicine</a>
          <a href="#about">
            Center Of Excellence In Gastrointestinal Sciences{" "}
          </a>
          <a href="#about">Cardiology</a>
          <a href="#about">Neurology</a>
          <a href="#about">Neurosurgery</a>
          <a href="#about">Surgical Oncology</a>
          <a href="#about">Center Of Excellence In Gastrointestinal</a>
          <a href="#about">General Medicine</a>
        </div>
        <div>
          <h6>Our Departments</h6>
          <p>Chinthavalappu Junction, Jail Road, Ernamkulam 673 004</p>
          <h6>Need help</h6>
          <div className="mail-ph">
          <a  href="#about"><img src="Group 5.svg" alt="Group" /></a>
            <a href="#about">mail@gisshospital.net</a>
          </div><br/>
          <div className="mail-ph" href="#about">
            <a id="ID" href="#about"><img src="Vector.svg" alt="Group" /></a>
            <a   href="#about">0495 2703250, 2300151</a>
          </div>
          <h6>Follow Us</h6>
          <div className="media">
            <a href="#media">
              <img src="Vector (9).svg" alt="vector9" />
            </a>
            <a href="#media">
              <img src="Vector (7).svg" alt="vector7" />
            </a>
            <a href="#media">
              <img src="Vector (8).svg" alt="vector8" />
            </a>
            <a href="#media">
              <img src="Vector (6).svg" alt="vector6" />
            </a>
          </div>
        </div>
      </div>
      <hr class="underline" />
      <p className="end">© Giss Hospital. 2024 all rights reserved</p>
    </div>
  );
};

export default Footer;
