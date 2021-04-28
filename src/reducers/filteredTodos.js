const filteredTodosReducer = (state = {}, action) => {
    switch (action.type) {
        case "filter-completed":
            Object.keys(state).forEach((todo) => {
                if (!state[todo].completed) {
                    delete action.filtered[todo];
                }
            });
            return  action.filtered ;
        case "filter-incompleted":
            Object.keys(state).forEach((todo) => {
                if (state[todo].completed) {
                    delete action.filtered[todo];
                }
            });
            return action.filtered ;

        case "filter-default":
            return action.filtered ;

        default: return state ;

    }
}

export default filteredTodosReducer;
