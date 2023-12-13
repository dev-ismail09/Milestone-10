import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const primaryColor = "#f3f3f3";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4 mb-4">
        <img src={logo} alt="" />
        <p className="mt-2">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div
        className="d-flex border rounded p-1"
        style={{ backgroundColor: primaryColor }}
      >
        <Button variant="danger">Latest</Button>{" "}
        <Marquee speed={100} className="text-danger">
          IMatch Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#deets">
                <UserCircleIcon className="w-25" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
