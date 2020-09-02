import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // actions => action handlers, bugs = state
    // Function that combines actions and reducers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      });
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId);
      bugs[index].userId = userId;
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    }
  }
});

console.log(slice);

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

// Selector
// problem - returns new array everytime selector is called
// export const getUnresolvedBugs = state =>
//   state.entities.bugs.filter(bug => !bug.resolved);

// Memoization
// optimization
// improve performance
// bugs => get unresolved bugs from the cache

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  // If the list of bugs is not changed, below logic will not be executed, will return result from cache
  (bugs, projects) => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId =>
  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
  );
