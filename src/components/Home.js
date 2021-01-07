import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Home = () => (
  <Container>
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>ABOUT AN API OF ICE AND FIRE</Card.Title>
            <Card.Text>
              An API of Ice And Fire is the world's greatest source for
              quantified and structured data from the universe of Ice and Fire
              (and the HBO series Game of Thrones). We give you access to data
              about all the Books, Characters and Houses in an easy to use JSON
              format.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
