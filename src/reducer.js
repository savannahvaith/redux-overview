
// A function with two paramateres, state and action 
let lastId = 0;

const reducer = (state = [], action) => {
    switch (action.type) {
        case "bugAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case "bugRemoved":
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }


    // if (action.type === "bugAdded") 
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.payload.description,
    //             resolved: false
    //         }
    //     ];
    // else if(action.type === 'bugRemoved')
    //     return state.filter(bug => bug.id !== action.payload.id);
    // return state;
}