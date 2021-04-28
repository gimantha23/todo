const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case "submit-todos":
            return {
                ...state,
                 [action.payload.id]: action.payload,
            };
        case "delete-todos":
            const { [action.payload]: remove, ...rest } = state;
            return {
                 ...rest,
            };
        case "toggle-todo":
            return {
                    ...state,
                    [action.payload]: {
                        ...state[action.payload],
                        completed: !state[action.payload]["completed"],
                    },
            };
        default:
            return state;
    }
}

export default todosReducer;