import store from './store';
import * as actions from './actionTypes';
// console.log(store);
// console.log(store.getState()); // []

// Subscribe to the store so we get notified when the state changes!
const unsubscribe = store.subscribe(() => {
    console.log(`Store changed!`, store.getState());
});

store.dispatch({
    type: actions.BUG_ADDED,
    payload:{
        description: "Bug1"
    }
})

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload:{
        id:1
    }
});


