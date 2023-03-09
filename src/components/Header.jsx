import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToPros = {
    loginRequest,
};

const Header = (props) => {
    const { user, loginRequest } = props;
    const { isLogin, isRegister } = props;
    const isHashUser = Object.keys(user).length > 0;
    const handleLogout = () => {
        loginRequest();
    };
    const HeaderClass = classNames("header", { isLogin, isRegister });
    return (
        <header className="">
            <Link to="/" rel="canonical">
                <img className="header__img" src="" alt="" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {isHashUser ? <img></img> : <img></img>}
                    <p>Perfil</p>
                </div>
            </div>
            <ul>
                {isHashUser && (
                    <li>
                        <Link to="/">{user.name} </Link>{" "}
                    </li>
                )}

                {isHashUser ? (
                    <li>
                        <a href="#logout" onClick={handleLogout}>
                            cerrar sesion
                        </a>
                    </li>
                ) : (
                    <li>
                        <Link to="/login"> Iniciar sesion</Link>
                    </li>
                )}
            </ul>
        </header>
    );
};

export default connect(mapStateToProps, mapDispatchToPros)(Header);
