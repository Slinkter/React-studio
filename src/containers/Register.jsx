import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerRequest } from "../actions/index";
import Header from "../components/Header";

const mapDispatchToProos = {
    registerRequest,
};

const handleSubmit = () => {};
const handleInput = () => {};

const Register = () => {
    return (
        <div>
            <Header isRegister />
            <section className="register">
                <section className="register__container">
                    <h2> Registrate </h2>
                    <form
                        className="register__container--form"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="email"
                            onChange={handleInput}
                        />
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="password"
                            onChange={handleInput}
                        />
                        <button className="button">registar</button>
                    </form>
                    <Link to="/login">Iniciar sesion</Link>
                </section>
            </section>
        </div>
    );
};

export default connect(null, mapDispatchToProos)(Register);
