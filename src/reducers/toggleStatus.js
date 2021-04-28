const toggleStatusReducer = (state = "all", action) => {
    switch (action.type) {
        case "toggle-status":
            return action.payload;
        default: return state
    }
}

export default toggleStatusReducer;