import React from "react";
import "../components/css/Style.css"; // Optional: for custom CSS
import "../components/css/BoxGrid.css"
import Button from "../components/Button";

const BoxGrid = () => {
    const handleClick = (button) => {
        console.log(`${button} clicked!`);
      };
  const boxes = [
    { id: 1, imageUrl: "box1.svg", text: "General Medicine" },
    { id: 2, imageUrl: "box2.svg", text: "Center Of Excellence In Gastrointestinal Sciences" },
    { id: 3, imageUrl: "box3.svg", text: "Cardiology" },
    { id: 4, imageUrl: "box4.svg", text: "Neurology" },
    { id: 5, imageUrl: "box5.svg", text: "Neurosurgery" },
    { id: 6, imageUrl: "box6.svg", text: "Surgical Oncology" },
  ];

  return (
    <div className="section-boxgrid">
      <section className="department">
        <div class="giss-hospital-heading">
          <h6>Giss Hospital</h6>
        </div>
        <h1>Our Departments</h1>
      </section>
      <div className="grid-container">
        {boxes.map((box) => (
          <div className="box" key={box.id}>
            <img
              src={box.imageUrl}
              alt={`Box ${box.id}`}
              className="box-image"
            />
            <p className="box-text">{box.text}</p>
          </div>
        ))}
      </div>
      <Button
          onClick={() => handleClick("Button 1")}
          className="Button-1"
          imgSrc="arrow-right.svg"
          imagePosition="right"
          label="View More"
        />
    </div>
  );
};

export default BoxGrid;
