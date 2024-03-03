// store.js
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllFoodsReducer } from './reducers/foodReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItemsFromStorage,
  },
  loginUserReducer: {
    userInfo: userInfoFromStorage,
    loading: false,
    error: null,
  },
  registerUserReducer: {
    loading: false,
    success: false,
    error: null,
  },
};

const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
});

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
