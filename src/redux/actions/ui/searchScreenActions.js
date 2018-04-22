import { CHANGE_SEARCH_VALUE, CHANGE_SORT } from '../../constansActions';

export function changeSearchValue (value) {
    return { type: CHANGE_SEARCH_VALUE, payload: value }
}

export function changeSort (sort, order) {
    return { type: CHANGE_SORT, payload: { sort, order } };
}
