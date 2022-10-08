import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
