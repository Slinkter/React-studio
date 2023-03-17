import React, { useReducer } from "react";
import { initState } from "./components/db";
import { reducer } from "./components/reducer";
import { types } from "./components/types";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const btnIncremet = () => {
        dispatch({ type: types.increment, payload: 1 });
    };
    const btnDecrease = () => {
        dispatch({ type: types.decrease, payload: 1 });
    };
    const btnReset = () => {
        dispatch({ type: types.reset });
    };

    return (
        <React.Fragment>
            <h1>Count : {state.count}</h1>
            <div>
                <button onClick={btnIncremet}>+</button>
                <button onClick={btnDecrease}>-</button>
                <button onClick={btnReset}>0</button>
            </div>
        </React.Fragment>
    );
};

export default App;
