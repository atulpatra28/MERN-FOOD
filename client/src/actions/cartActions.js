// cartActions.js
export const addToCart = (items, quantity, varient) => (dispatch, getState) => {
    const cartItem = {
      name: items.name,
      _id: items._id,
      image: items.image,
      varient: varient,
      quantity: Number(quantity),
      prices: items.prices,
      price: items.prices[0][varient] * quantity,
    };
  
    if (cartItem.quantity > 20) {
      alert('You cannot add more than 20!');
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: 'DELETE_FROM_CART', payload: items });
      } else {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem });
      }
    }
  
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  export const deleteFromCart = (menu) => (dispatch, getState) => {
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: menu,
    });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  // cartReducer.js
  export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item._id === action.payload._id && item.varient === action.payload.varient
        );
  
        if (existingItemIndex !== -1) {
          // If the item already exists, update the quantity and price
          const updatedItems = [...state.cartItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: action.payload.quantity,
            price: action.payload.price,
          };
  
          return {
            ...state,
            cartItems: updatedItems,
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
  