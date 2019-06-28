import {combineReducers} from 'redux';
import {UserReducer, DeptReducer} from './app/dept/reducer';

const rootReducers = combineReducers({
    users: UserReducer,
    depts: DeptReducer,
});

export default rootReducers;
