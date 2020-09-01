import { createStore } from "redux";
import reducer from "./reducer";

// Create store is higher order functiona s it takes function as arg

const store = createStore(reducer);

export default store;
