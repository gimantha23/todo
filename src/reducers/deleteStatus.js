const deleteStatusReducer = (state = false, action) => {
    switch (action.type) {
        case "delete-status":
            return action.payload;
        default: return state
    }
}

export default deleteStatusReducer;