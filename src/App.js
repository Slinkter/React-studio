import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, AuthRoute } from "./provider/auth";
import Menu from "./nav/Menu";
import BlogPage from "./page/BlogPage";
import BlogPost from "./page/BlogPost";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import LogoutPage from "./page/LogoutPage";
import ProfilePage from "./page/ProfilePage";

const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <AuthProvider>
                    <Menu></Menu>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="/blog" element={<BlogPage />}>
                            <Route path=":slug" element={<BlogPost />} />
                        </Route>
                        <Route
                            path="/profile"
                            element={
                                <AuthRoute>
                                    <ProfilePage />
                                </AuthRoute>
                            }
                        />
                        <Route path="*" element={<p> Not Found</p>} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </React.Fragment>
    );
};

export default App;
