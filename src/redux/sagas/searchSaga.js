import { getSearchValueState, getCurrentSortState, getCurrentOrderState } from '../selectors/ui/searchScreenSelectors';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { searchRepositoriesSuccess, searchRepositoriesError } from '../actions/entities/searchActions';
import { SEARCH_REPOSITORIES_REQUEST, SEARCH_NEXT_REPOSITORIES_REQUEST } from '../constansActions';
import api from '../../configApi';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { getSearchPageState } from '../selectors/entities/searchSelectors';

export function * searchRepositories () {
    const headersForRequest = yield select(getHeadersState);
    const sort = yield select(getCurrentSortState);
    const order = yield select(getCurrentOrderState);
    const page = yield select(getSearchPageState);
    const searchValue = yield select(getSearchValueState);
    if (searchValue.length !== 0) {
        const { data } = yield call(api.search.searchRepositories, {searchValue, sort, order, page}, headersForRequest);
        if (data) {
            yield put(searchRepositoriesSuccess(data.items));
        } else {
            yield put(searchRepositoriesError());
        }
    } else {
        yield put(searchRepositoriesSuccess([]));
    }

}

export function * watchSearchRepositories () {
    yield takeLatest(SEARCH_REPOSITORIES_REQUEST, searchRepositories);
}

export function * watchSearchNextRepositories () {
    yield takeLatest(SEARCH_NEXT_REPOSITORIES_REQUEST, searchRepositories);
}

export const searchSagas = [
    watchSearchRepositories(),
    watchSearchNextRepositories()
];
