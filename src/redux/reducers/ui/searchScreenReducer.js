import { CHANGE_SEARCH_VALUE, CHANGE_SORT } from '../../constansActions';

const initialState = {
    currentSort: '',
    currentOrder: 'desc',
    searchValue: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
    case 'Navigation/COMPLETE_TRANSITION':
        return { ...state, searchValue: '' };
    case 'persist/REHYDRATE':
        return  rehydrateStore(state, action);
    case CHANGE_SEARCH_VALUE:
        return  { ...state, searchValue: action.payload };
    case CHANGE_SORT:
        return { ...state,
            currentSort: action.payload.sort,
            currentOrder: action.payload.order
        };
    default:
        return state;
    }
}

function rehydrateStore (state, action) {
    if (action.key === 'ui' && action.payload && action.payload.searchScreen) {
        return  { ...state,
            currentSort: action.payload.searchScreen.currentSort,
            currentOrder: action.payload.searchScreen.currentOrder,
            searchValue: ''
        };
    } else {
        return initialState;
    }
}
