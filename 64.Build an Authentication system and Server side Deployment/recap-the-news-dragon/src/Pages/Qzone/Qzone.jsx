import React from "react";
import first from "../../assets/qZone1.png";
import second from "../../assets/qZone2.png";
import third from "../../assets/qZone3.png";
import backgroundImage from '../../assets/bg.png'
import { Button } from "react-bootstrap";

const Qzone = () => {
  return (
    <div>
      <div className="mt-4 mb-2 bg-light rounded">
        <h4 className="p-2">Q-Zone</h4>
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
      </div>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className="text-white text-center p-4">
        <h4 className="mb-4 mt-4">Create an Amazing Newspaper</h4>
        <p className="mb-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default Qzone;
