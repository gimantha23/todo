const inputTextReducer = (state = "", action) => {
    switch (action.type) {
        case "text-input":
            return action.payload;
        default: return state
    }
}

export default inputTextReducer;