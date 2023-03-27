export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      let arr = state.cart.filter((e) => {
        return e.id !== action.payload.id;
      });
      return {
        ...state,
        cart: arr,
      };
    case "CHANGE_CART_QTY":
      let temp = state.cart.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      );
      return { ...state, cart: temp };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };

    case "FILTER_BY_FAST_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, bySearchQuery: action.payload };

    case "CLEAR_FILTERS":
      return {
        byStock: "",
        byFastDelivery: false,
        byRating: 0,
        bySearchQuery: "",
      };

    default:
      return state;
  }
};
