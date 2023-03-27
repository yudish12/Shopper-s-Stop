import React, { useEffect, useState } from "react";
import { ListGroup, Button, Row, Col, Form, Image } from "react-bootstrap";
import Rating from "../Components/Rating";
import { useContextHook } from "../Context";
import { AiFillDelete } from "react-icons/ai";

const Cartpage = () => {
  const { state, dispatch } = useContextHook();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {state.cart.map((el, i) => (
            <ListGroup.Item key={i}>
              <Row>
                <Col md={2}>
                  <Image src={el.image} alt={el.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{el.name}</span>
                </Col>
                <Col md={2}>
                  <span>{el.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rate={el.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={el.qty}
                    onChange={(e) => {
                      return dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: el.id,
                          qty: e.target.value,
                        },
                      });
                    }}
                  >
                    {[...Array(el.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: el,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filter summary">
        <span className="title"> Subtotal ({state.cart.length}) items</span>
        <span>Total : ₹{total} </span>
        <Button type="button" disabled={state.cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cartpage;
