import { types } from "../reducer";

export const setFavorite = (payload) => ({
    type: types.setFavorite,
    payload,
});

export const deleteFavorite = (payload) => ({
    type: types.deleteFavorite,
    payload,
});

export const loginRequest = (payload) => ({
    type: types.loginRequest,
    payload,
});

export const logoutRequest = (payload) => ({
    type: types.logoutRequest,
    payload,
});

export const registerRequest = (payload) => ({
    type: types.registerRequest,
    payload,
});

export const getVideoSource = (payload) => ({
    type: types.getVideoSource,
    payload,
});
