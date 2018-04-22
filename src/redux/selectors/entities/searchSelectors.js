import { createSelector } from 'reselect';

// selector
const getSearchState = (state) => state.entities.search;

// reselect function
export const getSearchPageState = createSelector(
    [ getSearchState ],
    (search) => search.page
);

export const getSearchRepositoriesState = createSelector(
    [getSearchState],
    (search) => search.searchRepositories
);

export const getSearchIsLoadingState = createSelector(
    [ getSearchState ],
    (search) => search.isLoading
);
