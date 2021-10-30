import {
    ADD_FAVORITE_USER,
    GET_FAVORITES,
    GET_MY_FAVORITES,
    SET_ERROR_FAVORITE,
    SET_LOADING_FAVORITE,
} from '../keys';

const initialState = {
    favorites: [],
    isLoading: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_FAVORITES:
            return {...state, favorites: payload };
        case GET_MY_FAVORITES:
            return {...state, favorites: payload };
        case ADD_FAVORITE_USER:
            return {...state, favorites: [...state.favorites, payload] };
        case SET_ERROR_FAVORITE:
            return {...state, error: payload };
        case SET_LOADING_FAVORITE:
            return {...state, isLoading: payload };
        default:
            return state;
    }
}