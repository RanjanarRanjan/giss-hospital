import React from "react";
import Button from "../components/Button";

const SectionLast = () => {
  const handleClick = (button) => {
    console.log(`${button} clicked!`);
  };
  return (
    <div className="last-section">
      <div className="main-div">
        <h1>
          How can we help you?
          <br />
          We'd be delighted to <span>hear from you.</span>
        </h1>
        <div className="subscribe-container">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email address"
          />
          <Button
            onClick={() => handleClick("Button 1")}
            label="Subscribe"
            className="subscribe-button"
          />
        </div>
      </div>

      <div className="cartoon">
        <img src="news-illustration 1.svg" alt="cartton" />
      </div>
    </div>
  );
};

export default SectionLast;
