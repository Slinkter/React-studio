import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Menu from "./nav/Menu";
import HomePage from "./page/HomePage";
import { AuthProvider } from "./provider/auth";

const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <AuthProvider>
                    <Menu></Menu>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </React.Fragment>
    );
};

export default App;
