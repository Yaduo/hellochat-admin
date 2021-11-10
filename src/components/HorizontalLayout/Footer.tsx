import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © HelloChat.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by
                <Link
                  to="https://www.hellochat.com/"
                  className="ms-1 text-decoration-underline"
                >
                  HelloChat
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};
