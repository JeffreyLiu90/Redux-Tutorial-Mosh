import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

// create a slice for our users - id and name
// create an action for adding a user
// create an action for assigning a bug to a user
// create a selector for getting bugs by a user

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name
      });
    }
  }
});

export const { userAdded } = slice.actions;

export default slice.reducer;
