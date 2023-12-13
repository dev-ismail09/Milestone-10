import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="mt-2">Journalism Without Fear or Favour</p>
        <p className="mt-2">{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="d-flex mt-4 bg-light p-2 rounded">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <div className="d-flex mt-4 align-items-center">
        <div className="flex-grow-1">
            <Link className="text-black ms-2" to={`/`}>Home</Link>
            <Link className="text-black ms-2" to={`/`}>About</Link>
            <Link className="text-black ms-2" to={`/`}>Career</Link>
        </div>
        <div>
        <FaUserCircle style={{height: '30px', width: '30px'}} className="me-2"/>
          <Button variant="dark">Login</Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
