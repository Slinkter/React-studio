const types = {
    setFavorite: "SET_FAVORITE",
    deleteFavorite: "DELETE_FAVORITE",
    loginRequest: "LOGIN_REQUEST",
    logoutRequest: "LOGOUT_REQUEST",
    registerRequest: "REGISTER_REQUEST",
    getVideoSource: "GET_VIDEO_SOURCE",
};
const reducer = (state, action) => {
    switch (action.type) {
        case types.loginRequest:
            return { ...state, user: action.payload }; //user = {}
        case types.logoutRequest:
            return { ...state, user: action.payload }; //user = {}
        case types.registerRequest:
            return { ...state, user: action.payload }; //user = {}
        case types.setFavorite:
            return { ...state, myList: [...state.myList, action.payload] }; //myList: []
        case types.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter(
                    (item) => item.id !== action.payload
                ),
            }; // myList: []
        case types.getVideoSource:
            return {
                ...state,
                playing:
                    state.trends.find(
                        (item) => item.id === Number(action.payload)
                    ) ||
                    state.originals.find(
                        (item) => item.id === Number(action.payload)
                    ) ||
                    [],
            }; //playing: []
        default:
            return state;
    }
};

export { types };
export { reducer };
