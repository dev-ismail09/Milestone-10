import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <div className="mb-3">
        <h4 className="mb-2">Login With</h4>
        <Button className="mb-2 w-75 d-flex align-items-center" variant="primary">
          <FaGoogle className="me-2" style={{width: '20px', height: '20px'}} /> Login with Google
        </Button>
        <Button className="mb-2 w-75 d-flex align-items-center" variant="secondary">
          <FaGithub className="me-2" style={{width: '20px', height: '20px'}}/> Login with Github
        </Button>
      </div>
      <div>
        <h4 className="mb-2">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center"><FaFacebook className="me-2" style={{width: '20px', height: '20px'}} />Facebook</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center"><FaTwitch className="me-2" style={{width: '20px', height: '20px'}}/> Twitter</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center"><FaInstagram className="me-2" style={{width: '20px', height: '20px'}}/> Instragram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;
