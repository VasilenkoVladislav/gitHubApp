import { SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_SUCCESS,
    CHANGE_NETWORK_STATUS } from '../../constansActions';

const initialState = {
    info: {},
    isLoading: false,
    isSignIn: false,
    netWorkStatus: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SIGN_IN_REQUEST:
        return { ...state, isLoading: true };
    case SIGN_IN_SUCCESS:
        return { ...state, info: action.payload, isSignIn: true, isLoading: false };
    case SIGN_IN_ERROR:
        return { ...state, isLoading: false };
    case CHANGE_NETWORK_STATUS:
        return { ...state, netWorkStatus: action.payload };
    case SIGN_OUT_SUCCESS:
        return { ...state, info: {}, isSignIn: false, isLoading: false };
    default:
        return state;
    }
}
