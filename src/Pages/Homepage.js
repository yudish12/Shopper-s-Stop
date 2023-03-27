import React from "react";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import { useContextHook } from "../Context";

const Homepage = () => {
  const {
    state,
    productState: { sort, byStock, byFastDelivery, byRating, bySearchQuery },
  } = useContextHook();

  const transformProducts = () => {
    let sortedProducts = state.products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (bySearchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(bySearchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((e) => {
          return <Product key={e.id} {...e} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
