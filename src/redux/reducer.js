import { ADDTASK, DELETE } from "./action-types"

const initialState = {
    tasks: [{ text: "first", id: 1 }]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            }
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:

            return state
    }
}
