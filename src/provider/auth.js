import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import adminList from "../db/admin";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    function f_login({ username }) {
        const isAdmin = adminList.find((admin) => admin === username);
        navigate("/profile");
        setUser({ username, isAdmin });
    }

    function f_logout() {
        navigate("/");
        setUser(null);
    }

    const auth = { user, f_login, f_logout };

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    );
};

function AuthRoute(props) {
    const auth = useContext(AuthContext);
    if (!auth.user) {
        return <Navigate to="/login" />;
    }
}

function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
}

export { AuthProvider, AuthRoute, useAuth };
