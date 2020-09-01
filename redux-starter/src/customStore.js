import reducer from "./reducer";

const createStore = reducer => {
  // store internal state of store
  // we don't want to add it to this object, otherwise we can directly mutate the store
  let state;
  let listeners = [];

  // We can declare function inside another function - they're first class citizens
  // Create a function as a getter - get the value
  // Expose this function and obj that is returned
  //  In the function we access variables
  // OOP term, there is a method of this object
  const getState = () => {
    return state;
  };

  // First call reducer to get the new state
  // Notify the subscribers
  const dispatch = action => {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  };

  const subscribe = listener => {
    listeners.push(listener);
  };

  return {
    subscribe,
    dispatch,
    getState
  };
};

export default createStore(reducer);
