import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContextHook } from "../Context";
import Rating from "./Rating";

const styles = { color: "gray" };

const Product = ({
  id,
  name,
  image,
  price,
  fastDelivery,
  inStock,
  ratings,
}) => {
  const { state, dispatch } = useContextHook();

  const removeHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        name,
        image,
        price,
        fastDelivery,
        inStock,
        ratings,
      },
    });
  };

  const addHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        name,
        image,
        price,
        fastDelivery,
        inStock,
        ratings,
      },
    });
  };

  return (
    <Card className="products" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2">₹{price}</Card.Subtitle>
        {fastDelivery ? (
          <Card.Subtitle className="mb-2">Fast Delivery</Card.Subtitle>
        ) : (
          <Card.Subtitle className="mb-2">4 Days Delivery</Card.Subtitle>
        )}
        <Card.Subtitle>
          <Rating rate={ratings} style={styles} />
        </Card.Subtitle>
        {state.cart.some((p) => p.id === id) ? (
          <Button variant="danger" onClick={removeHandler}>
            Remove From Cart
          </Button>
        ) : (
          <Button
            disabled={inStock === 0}
            onClick={addHandler}
            variant="primary"
          >
            {inStock === 0 ? "Out Of Stock" : "Add To Cart"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
