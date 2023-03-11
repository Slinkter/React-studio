import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFavorite, deleteFavorite } from "../actions/index";

const mapDispatchToPros = {
    setFavorite,
    deleteFavorite,
};

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props;
    const { setFavorite, deleteFavorite } = props;

    const handleSetFavorite = () => {
        const newFavorite = { id, cover, title, year, contentRating, duration };
        setFavorite(newFavorite);
    };

    const handleDeleteFavorite = (itemId) => {
        deleteFavorite();
    };

    const deleteItemFav = (
        <img
            src=""
            alt=""
            className="carousel-item__details--img"
            onClick={() => handleDeleteFavorite(id)}
        />
    );
    const addItemFav = (
        <img
            src=""
            alt=""
            className="carousel-item__details--img"
            onClick={() => handleSetFavorite()}
        />
    );
    const playItem = (
        <img src="" alt="" className="carousel-item__details--img" />
    );

    return (
        <div className="carouse-item">
            <img className="carouse-item__img" src={cover} alt="" />
            <div className="carouse-item__details">
                <div>
                    <Link to={`/player/${id} `}> {playItem} </Link>
                    {isList ? deleteItemFav : addItemFav}
                </div>
                <p className="carouse-item__details--title"> {title}</p>
                <p className="carouse-item__details--subtitle">
                    {year} {contentRating} {duration}
                </p>
            </div>
        </div>
    );
};

export default connect(null, mapDispatchToPros)(CarouselItem);
