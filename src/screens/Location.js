import React from "react";

const Location = () => {
  return (
    <div>
      <section className="location">
        <div class="giss-hospital-heading">
          <h6>Giss Hospital</h6>
        </div>
        <h1>We Are Located At</h1>
        <div class="center-container">
          <div class="circle-container">
            <img src="lication.svg" alt="Circle" class="circle-image" />
            <img src="Mask group.svg" alt="Inner" class="inner-image" />
          </div>
          <div class="white-box">
            <h3>Ernammkulam</h3>
            <p>mail@gisshspital.net</p>
            <p>0495 1234567</p>
            <p>
              Chinthavalappu Junction, Jail Road, <br />
              Ernamkulam 673 004
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
