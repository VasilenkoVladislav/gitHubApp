import { all } from 'redux-saga/effects';
import { authSagas } from './authenticateSaga';
import { searchSagas } from './searchSaga';

export default function * rootSaga () {
    yield all([
        ...authSagas,
        ...searchSagas
    ]);
}
