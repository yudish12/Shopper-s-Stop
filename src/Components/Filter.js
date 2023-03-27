import React from "react";
import Form from "react-bootstrap/Form";
import Rating from "./Rating";
import { useContextHook } from "../Context";

const Filter = () => {
  const handleRating = (i) => {
    productDispatch({
      type: "FILTER_BY_RATING",
      payload: i + 1,
    });
  };

  const { productState, productDispatch } = useContextHook();

  return (
    <div className="filter">
      <span className="title">Filter Products</span>

      <span>
        <Form.Check
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={productState.sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={productState.sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_FAST_DELIVERY",
            })
          }
          checked={productState.byFastDelivery}
        />
      </span>
      <span>
        <Form.Check
          label="Include Out Of Stock Only"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={productState.byStock}
        />
      </span>
      <span>
        <label>Rating:</label>{" "}
        <Rating handleRating={handleRating} rate={productState.byRating} />
      </span>
      <button
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
