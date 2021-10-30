import {
    SET_LOADING_USER,
    SET_ERROR_USER,
    SET_LOGIN_SUCCESS,
    SET_LOGOUT,
    SET_IS_ERROR_USER,
    SET_CURRENT_USER,
    SET_USER,
    SET_UPDATE_USER,
} from '../keys';

const initialState = {
    loading: false,
    error: null,
    isError: false,
    access_token: localStorage.getItem('access_token'),
    currentUser: {},
    user: {},
};

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING_USER:
            return {...state, loading: payload };
        case SET_ERROR_USER:
            return {...state, error: payload };

        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                access_token: payload,
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };

        case SET_USER:
            return {
                ...state,
                user: payload,
            };

        case SET_UPDATE_USER:
            return {
                ...state,
                user: payload,
            };
        case SET_LOGOUT:
            return {...state, access_token: payload };

        case SET_IS_ERROR_USER:
            return {
                ...state,
                isError: payload,
            };
        default:
            return state;
    }
}

export default reducer;