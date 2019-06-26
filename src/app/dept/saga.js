import {call, put, take, takeEvery} from 'redux-saga/effects';
import {SELECT_DEPT} from './action';
import {selectDeptFinish} from './action';
import {ajax} from '@src/uitls';

function* fetchUsers(action) {
    try {
        debugger;
        const data = yield call(ajax.get, 'user/GetAllUsers');
        yield put(selectDeptFinish(data));
    } catch (error) {}
}

export function* watchFetchUsers() {
    yield takeEvery(SELECT_DEPT, fetchUsers);
}
