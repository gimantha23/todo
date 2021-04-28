const uploadStatusReducer = (state = false, action) => {
    switch (action.type) {
        case "upload-status":
            return !action.payload;
        default: return state
    }
}

export default uploadStatusReducer;