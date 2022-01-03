import { combineReducers } from 'redux';
import { TodoReducer } from './TodoReducer';

const MainReducer = combineReducers({
    todo:TodoReducer
})

export default MainReducer