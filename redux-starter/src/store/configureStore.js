import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

// Create store is higher order functiona s it takes function as arg

// Store enhancer to talk to devtools

export default function configureAppStore() {
  return configureStore({
    reducer
  });
}
