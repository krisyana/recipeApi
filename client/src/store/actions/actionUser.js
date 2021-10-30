import localHost from '../../apis/localHost';
import {
    SET_ERROR_USER,
    SET_LOADING_USER,
    SET_LOGIN_SUCCESS,
    SET_LOGOUT,
    SET_IS_ERROR_USER,
    SET_CURRENT_USER,
    SET_USER,
    SET_UPDATE_USER,
} from '../keys';
import { toast } from 'react-toastify';

export function setLoading(payload) {
    return {
        type: SET_LOADING_USER,
        payload,
    };
}

export function setError(payload) {
    return {
        type: SET_ERROR_USER,
        payload,
    };
}

export function setIsError(payload) {
    return {
        type: SET_IS_ERROR_USER,
        payload,
    };
}

export function setUser(payload) {
    return {
        type: SET_USER,
        payload,
    };
}

export function setUpdateUser() {
    return {
        type: SET_UPDATE_USER,
    };
}

export function setLoginSuccess(payload) {
    return {
        type: SET_LOGIN_SUCCESS,
        payload,
    };
}

export function setLogout(payload) {
    return {
        type: SET_LOGOUT,
        payload,
    };
}

export function setCurrentUser(payload) {
    return {
        type: SET_CURRENT_USER,
        payload,
    };
}

export function actionLogin(payload) {
    return async function(dispatch) {
        dispatch(setLoading(true));
        try {
            const response = await localHost.post('/login', payload);
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token);
            dispatch(setLoginSuccess(access_token));
        } catch (err) {
            let message;
            if (err.response.status === 401) {
                message = err.response.data.msg;
            } else {
                message = 'Internal Server Error';
            }
            dispatch(setError(message));
        }
    };
}

export function actionLogout() {
    return async function(dispatch) {
        localStorage.clear();
        dispatch(setLogout(null));
    };
}

export function actionAddUsers(payload) {
    return async function(dispatch, getState) {
        dispatch(setLoading(true));
        try {
            await localHost.post('/register', payload, {});
            dispatch(setLoading(false));
        } catch (err) {
            dispatch(setLoading(false));
            const { msg } = err.response.data;
            toast.error(msg);
            if (err.response.status === 400) {
                dispatch(setIsError(true));
                dispatch(setError(msg));
            }
        }
    };
}

export function actionDeleteUser(id) {
    return async function(dispatch, getState) {
        try {
            await localHost.delete(`/users/${id}`, {
                headers: {
                    access_token: localStorage.getItem('access_token'),
                },
            });
        } catch (err) {
            const { msg } = err.response.data;
            dispatch(setIsError(true));
            dispatch(setError(msg));
        }
    };
}

export function actionEditUser(payload) {
    return async function(dispatch, getState) {
        try {
            const response = await localHost.put(`/users/${payload.id}`, payload, {
                headers: {
                    access_token: localStorage.getItem('access_token'),
                },
            });
            const { data } = response;
            const state = getState().usersState.users;
            let user = getState().usersState.user;
            const findUser = state.findIndex(el => el.id === data.id);
            state[findUser] = data;
            user = state[findUser];
            dispatch(setUpdateUser(user));
        } catch (err) {
            const { msg } = err.response.data;
            dispatch(setIsError(true));
            dispatch(setError(msg));
        }
    };
}