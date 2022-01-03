import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants'


export function TodoReducer(state = [], action = {}) {
    switch (action.type) {
        case ADD_TODO:
            state.push({ id: action.id, text: action.text })
            return state
        case UPDATE_TODO:
            state.map(v => { if (v.id == action.id) { v.text = action.text } })
            return state
        case DELETE_TODO:
            return state.filter(v=>v.id!=parseInt(action.id))
        default:
            return state;
    }
}