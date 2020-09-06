import {
    takeEvery,
    put,
    call
} from "redux-saga/effects";
import {
    LOGIN_FAIL,
    LOGIN_START,
    REGISTER_USER_START,
    logInUser,
    loadUser,
    setHideLoginForm,
    registerFail,


} from "../reducers/authReducer";
import {
    AuthApi
} from "dataAccessLayer/";


export default function* authSagaWatcher() {
    yield takeEvery(LOGIN_START, logInSagaWorker);
    yield takeEvery(REGISTER_USER_START, registerSagaWatcher)
}

function* logInSagaWorker(action) {
    try {
        const res = yield call(AuthApi.logIn, action.payload);
        yield localStorage.setItem("token", res.data.token);
        yield put(logInUser(res.data));
        yield put(loadUser());
        yield put(setHideLoginForm());
    } catch (error) {
        console.log(error);
        yield put({
            type: LOGIN_FAIL
        });
    }
}

function* registerSagaWatcher(action) {
    try {
        const res = yield call(AuthApi.register, action.payload);
        yield localStorage.setItem("token", res.data.token);
        yield put(setHideLoginForm());
    } catch (error) {
        console.log(error)
        yield put(registerFail());
        yield put(setHideLoginForm());
    }
}