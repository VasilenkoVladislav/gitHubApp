import { put, call, takeLatest } from 'redux-saga/effects';
import { signInSuccess, signInError, signOutSuccess } from '../actions/entities/authenticateActions';
import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from '../constansActions';
import { Alert } from 'react-native';
import api from '../../configApi';
import { clearPersistStore } from '../utils/reduxPersist';
import { updateHeaders } from '../actions/entities/headersActions';
import { push } from '../actions/nav';

export function * signIn ({payload}) {
    const { data, headers, error } = yield call(api.authentications.signIn, payload);
    if (data && headers) {
        yield put(updateHeaders(headers));
        yield put(signInSuccess(data));
        yield put(push('App'));
    } else {
        Alert.alert('Invalid login or password', error.message);
        yield call(clearPersistStore);
        yield put(signInError());
    }
}

export function * signOut () {
    yield call(clearPersistStore);
    yield put(push('Auth'));
    yield put(signOutSuccess());
}


export function * watchSignIn () {
    yield takeLatest(SIGN_IN_REQUEST, signIn);
}

export function * watchSignOut () {
    yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export const authSagas = [
    watchSignIn(),
    watchSignOut()
];
