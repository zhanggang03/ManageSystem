import {call, put, take, takeEvery} from 'redux-saga/effects';
import {SELECT_DEPT, GET_ALLDEPT} from './action';
import {selectDeptFinish, getAllDeptFinish} from './action';
import {ajax} from '@src/uitls';

function* fetchUsers(action) {
    try {
        const res = yield call(
            ajax.get,
            'user/GetUsersByDept/' + action.payload
        );
        yield put(selectDeptFinish(res.Success === true ? res.Data : []));
    } catch (error) {}
}

function* fetchDepts(action) {
    try {
        const res = yield call(ajax.get, 'user/GetAllDeparments/');
        yield put(getAllDeptFinish(res.Success === true ? res.Data : []));
    } catch (error) {}
}

export function* watchFetchUsers() {
    yield takeEvery(SELECT_DEPT, fetchUsers);
    yield takeEvery(GET_ALLDEPT, fetchDepts);
}
