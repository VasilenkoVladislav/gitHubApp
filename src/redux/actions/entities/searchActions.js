import { SEARCH_REPOSITORIES_REQUEST,
    SEARCH_NEXT_REPOSITORIES_REQUEST,
    SEARCH_REPOSITORIES_SUCCESS,
    SEARCH_REPOSITORIES_ERROR } from '../../constansActions';

export function searchRepositoriesRequest () {
    return { type: SEARCH_REPOSITORIES_REQUEST };
}

export function searchNextRepositoriesRequest () {
    return { type: SEARCH_NEXT_REPOSITORIES_REQUEST };
}

export function searchRepositoriesSuccess (data) {
    return { type: SEARCH_REPOSITORIES_SUCCESS, payload: data };
}

export function searchRepositoriesError () {
    return { type: SEARCH_REPOSITORIES_ERROR };
}

