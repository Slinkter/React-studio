import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../actions/index";

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

    return <div></div>;
};

export default connect(null, mapDispatchToPros)(Login);
