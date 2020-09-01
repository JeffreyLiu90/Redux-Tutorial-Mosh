import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";
console.log(store);
//function gets called everytime state of the store changes
// Usually in the UI layer
// If in vanilla JS or jquery - DOM elements - refresh view
// If React - re-render
// UI components subscribe to store to get notified when state of store changes
//  If the current UI element is not visible, we should unsubscribe
//  I.e. we added a bug -
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch(bugRemoved(1));
console.log(store.getState());
