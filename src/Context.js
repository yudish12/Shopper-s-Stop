import { createContext, useContext, useReducer } from "react";
import { reducer, productReducer } from "./reduces";
import { faker } from "@faker-js/faker";

const GlobalContext = createContext();

const randomNumGen = (maxi) => {
  return Math.floor(Math.random() * maxi);
};

const products = [...Array(11)].map(() => {
  const img = faker.image.abstract(300, 300, true);
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: img,
    inStock: randomNumGen(10),
    fastDelivery: faker.datatype.boolean(),
    ratings: randomNumGen(5),
  };
});

const initialState = {
  products: products,
  cart: [],
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: "",
    byFastDelivery: false,
    byRating: 0,
    bySearchQuery: "",
  });

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, productDispatch, productState }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useContextHook = () => {
  return useContext(GlobalContext);
};

export default AppContext;
