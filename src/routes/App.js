import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";
import Register from "../containers/Register";

const App = () => {
    <Router>
        <Routes>
            <Route exact path="" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/player/:id" element={<Player />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    </Router>;
};

export default App;
