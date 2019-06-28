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

export const GET_ALLDEPT = 'GET_ALLDEPT';
export const GET_ALLDEPT_FINISH = 'GET_ALLDEPT_FINISH';
export const SELECT_DEPT = 'SELECT_DEPT';
export const SELECT_DEPT_FINISH = 'SELECT_DEPT_FINISH';
export const ADD_DEPT = 'ADD_DEPT';
export const ADD_DEPT_FINISH = 'ADD_DEPT_FINISH';
export const EDIT_DEPT = 'EDIT_DEPT';
export const DELETE_DEPT = 'DELETE_DEPT';

export function getAllDept() {
    return {
        type: GET_ALLDEPT,
    };
}

export function getAllDeptFinish(depts) {
    return {
        type: GET_ALLDEPT_FINISH,
        payload: depts,
    };
}

export function selectDept(dept) {
    return {
        type: SELECT_DEPT,
        payload: dept,
    };
}

export function selectDeptFinish(users) {
    return {
        type: SELECT_DEPT_FINISH,
        payload: users,
    };
}

export function addDept(dept, closeModul) {
    return {
        type: ADD_DEPT,
        payload: dept,
        close: closeModul,
    };
}

export function addDeptFinish(dept) {
    return {
        type: ADD_DEPT_FINISH,
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
