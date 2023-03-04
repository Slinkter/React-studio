import React, { useState } from "react";
import { useAuth } from "../provider/auth";

const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = useState("");

    const login = () => {};

    return (
        <div>
            <h1> Login </h1>

            <form>
                <label>Escribe tu nombre de usuario </label>
                <br />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginPage;
