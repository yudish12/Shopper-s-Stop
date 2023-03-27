import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Cart from "./Cart";
import { FaCartPlus } from "react-icons/fa";
import { useContextHook } from "../Context";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const { state, productDispatch } = useContextHook();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Nav>
          <Navbar.Brand>
            <Link className="link" to={"/"}>
              Shoppers Stop
            </Link>
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Form.Control
            className="m-auto"
            size="md"
            style={{ width: 500 }}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Nav>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaCartPlus fontSize={"20px"} />
              <Badge style={{ fontSize: "13px" }} bg="success">
                {state.cart.length}
              </Badge>
            </Dropdown.Toggle>

            {state.cart.length === 0 ? (
              <Dropdown.Menu>
                {" "}
                <span>Cart Is Empty</span>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu className="pos">
                <Cart />
              </Dropdown.Menu>
            )}
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
