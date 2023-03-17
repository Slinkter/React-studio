import { types } from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return { count: state.count + action.payload };
        case types.decrease:
            return { count: state.count - action.payload };
        case types.reset:
            return { count: 0 };
        default:
            return state;
    }
};
export { reducer };
