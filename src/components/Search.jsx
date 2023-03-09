import classNames from "classnames";
import React from "react";

const Search = (props) => {
    const { isHome } = props;
    const inputStyle = classNames("input", { isHome });

    return (
        <section className="main">
            <h2>que quieres ver hoy </h2>
            <input type="text" className={inputStyle} placeholder="..." />
        </section>
    );
};

export default Search;
