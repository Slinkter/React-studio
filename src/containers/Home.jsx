import React from "react";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Search from "../components/Search";

const mapStateToProps = (state) => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

const Home = (props) => {
    const { myList, trend, originals } = props;

    const listFavorite = (
        <Categories title="Mi List">
            <Carousel>
                {myList.map((item) => (
                    <CarouselItem key={item.id} {...item} isList />
                ))}
            </Carousel>
        </Categories>
    );

    const listTrend = (
        <Categories title="Tendencias">
            <Carousel>
                {trend.map((item) => (
                    <CarouselItem key={item.id} {...item} isList />
                ))}
            </Carousel>
        </Categories>
    );
    const listOriginals = (
        <Categories title="Orginales">
            <Carousel>
                {originals.map((item) => (
                    <CarouselItem key={item.id} {...item} isList />
                ))}
            </Carousel>
        </Categories>
    );

    return (
        <React.Fragment>
            <Header />
            <Search isHome />
            {myList.length > 0 && listFavorite}
            {trend.length > 0 && listTrend}
            {originals.length > 0 && listOriginals}
        </React.Fragment>
    );
};

export default connect(mapStateToProps, null)(Home);
