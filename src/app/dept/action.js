export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user,
    };
}

export function editUser(user) {
    return {
        type: EDIT_USER,
        payload: user,
    };
}

export function deleteUser(user) {
    return {
        type: DELETE_USER,
        payload: user,
    };
}

export const SELECT_DEPT = 'SELECT_DEPT';
export const ADD_DEPT = 'ADD_DEPT';
export const EDIT_DEPT = 'EDIT_DEPT';
export const DELETE_DEPT = 'DELETE_DEPT';

export function selectDept(dept) {
    debugger;
    return {
        type: SELECT_DEPT,
        payload: dept,
    };
}

export function addDept(dept) {
    return {
        type: ADD_DEPT,
        payload: dept,
    };
}

export function editDept(dept) {
    return {
        type: EDIT_DEPT,
        payload: dept,
    };
}

export function deleteDept(dept) {
    return {
        type: DELETE_DEPT,
        payload: dept,
    };
}
