import React from "react";
import { Container, Image } from "react-bootstrap";

function DisplayImage(props) {
  return (
    <div>
      <Container fluid>
        <center>
          <Image src={props.src} onClick={props.onClick} rounded fluid />
        </center>
      </Container>
    </div>
  );
}

export default DisplayImage;
