import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../actions/index";
import Header from "../components/Header";

const mapDispatchToPros = {
    loginRequest,
};

const Login = (props) => {
    const { loginRequest } = props;
    const navigate = useNavigate();
    const initUser = {
        email: "",
        password: "",
    };

    const [form, setValue] = useState(initUser);
    const handleInput = (e) => {
        const newForm = {
            ...form,
            [e.tarjet.name]: e.target.value,
        };
        setValue(newForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginRequest();
        navigate("/home");
    };

    return (
        <div>
            <Header isLogin>
                <section className="login">
                    <section className="login__container">
                        <h2>Iniciar sesion</h2>
                        <form className="" onSubmit={handleSubmit}>
                            <input
                                name="email"
                                className="input"
                                type="text"
                                placeholder="example@mail.com"
                                onChange={handleInput}
                            />
                            <input
                                name="password"
                                className="input"
                                type="password"
                                placeholder="************"
                                onChange={handleInput}
                            />
                            <button className="button">Iniciar session </button>
                            <div className="login__container--rember-me">
                                <label>
                                    <input
                                        id="cbox1"
                                        type="checkbox"
                                        value="first_checkbox"
                                    />
                                    Recuerdame
                                </label>
                                <a href="/"> Olvide mi contraseña </a>
                            </div>
                        </form>
                        <section>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </section>
                        <Link to="/register" rel="canonical">
                            <p className="">Registrate</p>
                        </Link>
                    </section>
                </section>
            </Header>
        </div>
    );
};

export default connect(null, mapDispatchToPros)(Login);
