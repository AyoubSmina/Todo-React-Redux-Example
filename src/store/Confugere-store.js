import { createStore } from 'redux';
import MainReducer from '../reducers';

var store = createStore(MainReducer)

export default store