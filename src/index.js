import store from './store';

// console.log(store);
// console.log(store.getState()); // []

// Subscribe to the store so we get notified when the state changes!
const unsubscribe = store.subscribe(() => {
    console.log(`Store changed!`, store.getState());
});

store.dispatch({
    type: "bugAdded",
    payload:{
        description: "Bug1"
    }
})

unsubscribe();

store.dispatch({
    type:"bugRemoved",
    payload:{
        id:1
    }
});


