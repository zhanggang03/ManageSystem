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
<<<<<<< HEAD
export const SELECT_DEPT_FINISH = 'SELECT_DEPT_FINISH';
=======
export const SELECT_DEPT_Finish = 'SELECT_DEPT_Finish';
>>>>>>> 95d6dec470939d38dbcf32dacc3a13458e86d170
export const ADD_DEPT = 'ADD_DEPT';
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
<<<<<<< HEAD
        type: SELECT_DEPT_FINISH,
=======
        type: SELECT_DEPT_Finish,
>>>>>>> 95d6dec470939d38dbcf32dacc3a13458e86d170
        payload: users,
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
