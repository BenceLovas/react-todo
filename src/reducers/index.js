import { combineReducers } from 'redux'
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
    visibilityFilter,
    todos
})

export default reducers;