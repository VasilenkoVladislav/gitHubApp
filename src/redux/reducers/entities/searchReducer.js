import { SEARCH_REPOSITORIES_REQUEST,
    SEARCH_NEXT_REPOSITORIES_REQUEST,
    SEARCH_REPOSITORIES_SUCCESS,
    SEARCH_REPOSITORIES_ERROR,
    SIGN_OUT_SUCCESS } from '../../constansActions';

const initialState = {
    page: 1,
    searchRepositories: [],
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SEARCH_REPOSITORIES_REQUEST:
        return { ...state, page: 1, searchRepositories: [], isLoading: true };
    case SEARCH_NEXT_REPOSITORIES_REQUEST:
        return { ...state, isLoading: true };
    case SEARCH_REPOSITORIES_SUCCESS:
        return { ...state,
            page: state.page + 1,
            searchRepositories: [...state.searchRepositories, ...action.payload],
            isLoading: false
        };
    case SEARCH_REPOSITORIES_ERROR:
        return { ...state, page: 1, isLoading: false };
    case SIGN_OUT_SUCCESS:
        return initialState;
    default:
        return state;
    }
}
