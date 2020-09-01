import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";

// Create store is higher order functiona s it takes function as arg

// Store enhancer to talk to devtools
const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
