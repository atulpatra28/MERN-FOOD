// cartReducer.js
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const alreadyExists = state.cartItems.find(
          (item) => item._id === action.payload._id && item.varient === action.payload.varient
        );
  
        if (alreadyExists) {
          // If the item already exists, update the quantity and price
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === action.payload._id && item.varient === action.payload.varient
                ? action.payload
                : item
            ),
          };
        } else {
          // If the item doesn't exist, add it to the cart
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
  
      case 'DELETE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => !(item._id === action.payload._id && item.varient === action.payload.varient)
          ),
        };
  
      default:
        return state;
    }
  };
  