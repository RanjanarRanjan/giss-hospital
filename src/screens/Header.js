import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="Main-header">
        <div className="logo">
          <img src="1 1.svg" alt="logo" />
        </div>
        <div className="header-options">
          <a href="#Home">Home</a>
          <a href="#About Us">About Us</a>
          <a href="#Management Team">Management Team</a>
          <a href="#Advisory Board">Advisory Board</a>
          <a href="#Departments">Departments</a>
          <a href="#News & Events">News & Events</a>
          <a href="#Career">Career</a>
          <a href="#Contact Us">Contact Us</a>
          <a class="logo-search" href="search-logo">
            <img src="search.svg" alt="logo" />
          </a>
        </div>
        
        <div className="header-right">
        <div class="vertical-line"></div>
          <div className="contact">
            <img src="ambulance 1.svg" alt="logo" />
          </div>
          <div className="header-call">
            <span>For Emergency Dial</span>
            <br />
            <a href="#call">+91 1234567890</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
