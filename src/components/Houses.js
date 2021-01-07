import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

const Houses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [houseData, setHouseData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${currentPage}&pageSize=5`
      )
      .then((response) => setHouseData(response.data));
  }, [currentPage]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Houses</Card.Title>

              {houseData.map((h) => (
                <Card className="text-center">
                  <Card.Header className="bg-info">{h.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {h.coatOfArms && (
                        <>
                          <strong>Coat of Arms :</strong> {h.coatOfArms}{" "}
                        </>
                      )}
                    </Card.Text>
                    <Card.Text>
                      {" "}
                      <strong>Region :</strong>
                      {h.region}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
            <Card.Footer>
              <div className="pagination">
                {currentPage > 1 && (
                  <Button
                    variant="success"
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                  >
                    Go to page {currentPage - 1}
                  </Button>
                )}
                <Button
                  variant="warning"
                  className="ml-auto"
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  Go to page {currentPage + 1}
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Houses;
