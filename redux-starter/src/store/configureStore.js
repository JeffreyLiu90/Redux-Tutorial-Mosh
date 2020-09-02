import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// Create store is higher order function as it takes function as arg

// Store enhancer to talk to devtools

export default function configureAppStore() {
  return configureStore({
    reducer
  });
}
