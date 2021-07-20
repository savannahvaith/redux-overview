import store from './store';
import { bugAdded, bugResolved } from './actions';
// import * as actions from './actionTypes';
// console.log(store);
// console.log(store.getState()); // []

// Subscribe to the store so we get notified when the state changes!
const unsubscribe = store.subscribe(() => {
    console.log(`Store changed!`, store.getState());
});

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload:{
//         description: "Bug1"
//     }
// })

// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload:{
//         id:1
//     }
// });

// Using Actions.js
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));

store.dispatch(bugResolved(1));