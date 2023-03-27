import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContextHook } from "../Context";
import { AiFillDelete } from "react-icons/ai";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContextHook();

  return (
    <div style={{ width: "370px" }}>
      {state.cart.map((e) => (
        <Container width={"100px"} key={e.id}>
          <Row
            style={{ justifyContent: "space-around" }}
            xs="auto"
            className="mt-3"
          >
            <Col>
              <Image
                width={50}
                roundedCircle={true}
                fluid={true}
                src={e.image}
                alt={e.name}
              />
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Subtitle>{e.name}</Card.Subtitle>
                <Card.Text>{e.price}</Card.Text>
              </Card>
            </Col>
            <Col>
              <Button
                variant="light"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: e })
                }
              >
                <AiFillDelete />
              </Button>
            </Col>
          </Row>
        </Container>
      ))}
      <Link to={"/cart"}>
        <Button style={{ width: "95%", margin: "15px 10px" }}>
          Go To Cart
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
