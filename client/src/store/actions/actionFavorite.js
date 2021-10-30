import localHost from '../../apis/localHost';
import {
    ADD_FAVORITE_USER,
    GET_FAVORITES,
    GET_MY_FAVORITES,
    SET_ERROR_FAVORITE,
    SET_LOADING_FAVORITE,
} from '../keys';
import { toast } from 'react-toastify';

export function setLoading(payload) {
    return {
        type: SET_LOADING_FAVORITE,
        payload,
    };
}

export function getMyFAVORITEs(payload) {
    return {
        type: GET_MY_FAVORITES,
        payload,
    };
}

export function setError(payload) {
    return {
        type: SET_ERROR_FAVORITE,
        payload,
    };
}

export function getFAVORITEs(payload) {
    return {
        type: GET_FAVORITES,
        payload,
    };
}

export function addFAVORITEUser(payload) {
    return {
        type: ADD_FAVORITE_USER,
        payload,
    };
}

export function fetchFAVORITEs() {
    const access_token = localStorage.getItem('access_token');
    return async function(dispatch) {
        dispatch(setLoading(true));
        try {
            const response = await localHost({
                method: 'get',
                url: '/favorites',
                headers: {
                    access_token,
                },
            });
            dispatch(getMyFAVORITEs(response.data));
            dispatch(setLoading(false));
        } catch (err) {
            console.log(err.response.data);
            dispatch(setError(err.response.data));
        }
    };
}

export function actionAddFAVORITEUser(payload) {
    return async function(dispatch) {
        dispatch(setLoading(true));
        try {
            const access_token = localStorage.getItem('access_token');
            const { data } = await localHost({
                method: 'POST',
                url: '/favorites',
                headers: {
                    access_token,
                },
                data: payload,
            });
            dispatch(addFAVORITEUser(data));
            toast.success('Recipe Favorited');
            dispatch(setLoading(false));
        } catch (err) {
            console.log(err.response.data);
            dispatch(setError(err.response.data));
        }
    };
}