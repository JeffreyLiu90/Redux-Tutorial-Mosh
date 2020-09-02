import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();
store.subscribe(() => {
  console.log("Store Changed");
});

// value becomes payload property
// dispatch - entry point, every action via same entry point
// To change state of store we must dispatch action, which calls our reducer
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(userAdded({ name: "User 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// const unresolved = store.getState().entities.bugs.filter(bug => !bug.resolved);

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// console.log(unresolvedBugs);

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

const bugs = getBugsByUser(1)(store.getState());
console.log("bigs: ", bugs);

console.log(x === y);
