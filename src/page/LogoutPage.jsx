import React from "react";
import { useAuth } from "../provider/auth";

const LogoutPage = () => {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();

        auth.f_logout();
    };

    return (
        <div>
            <h1>LogoutPage</h1>
            <form onSubmit={logout}>
                <label>Deseas salir?</label>
                <button>Entrar</button>
            </form>
        </div>
    );
};

export default LogoutPage;
