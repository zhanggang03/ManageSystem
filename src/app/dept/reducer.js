<<<<<<< HEAD
import {
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
    SELECT_DEPT_FINISH,
    GET_ALLDEPT_FINISH,
} from './action';
=======
import {ADD_USER, EDIT_USER, DELETE_USER, SELECT_DEPT_Finish} from './action';
>>>>>>> 95d6dec470939d38dbcf32dacc3a13458e86d170
import {ADD_DEPT, EDIT_DEPT, DELETE_DEPT} from './action';

let initialUserState = [];

export const UserReducer = (state = initialUserState, action) => {
    switch (action.type) {
<<<<<<< HEAD
        case SELECT_DEPT_FINISH:
=======
        case SELECT_DEPT_Finish:
>>>>>>> 95d6dec470939d38dbcf32dacc3a13458e86d170
            return action.payload;
        case ADD_USER:
            return state;
        case EDIT_USER:
            return state;
        case DELETE_USER:
            return state;
        default:
            return state;
    }
};

let initialDeptState = [];

export const DeptReducer = (state = initialDeptState, action) => {
    switch (action.type) {
        case GET_ALLDEPT_FINISH:
            return action.payload;
        case ADD_DEPT:
            return state;
        case EDIT_DEPT:
            return state;
        case DELETE_DEPT:
            return state;
        default:
            return state;
    }
};
