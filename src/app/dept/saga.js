import {call, put, take, takeEvery} from 'redux-saga/effects';
import {SELECT_DEPT, GET_ALLDEPT, ADD_DEPT} from './action';
import {selectDeptFinish, getAllDeptFinish, addDeptFinish} from './action';
import {ajax} from '@src/uitls';

function* fetchUsers(action) {
    try {
        const res = yield call(
            ajax.get,
            'user/GetUsersByDept/' + action.payload
        );
        if (res.Success === true) yield put(selectDeptFinish(res.Data));
    } catch (error) {}
}

function* fetchDepts(action) {
    try {
        const res = yield call(ajax.get, 'user/GetAllDeparments/');
        if (res.Success) yield put(getAllDeptFinish(res.Data));
    } catch (error) {}
}

function* addDept(action) {
    try {
        const res = yield call(ajax.post, 'user/CreateDept/', action.payload);
        if (res.Success === true) {
            yield put(addDeptFinish(res.Data));
            yield action.close();
        }
    } catch (error) {}
}

export function* watchFetchUsers() {
    yield takeEvery(ADD_DEPT, addDept);
    yield takeEvery(SELECT_DEPT, fetchUsers);
    yield takeEvery(GET_ALLDEPT, fetchDepts);
}
