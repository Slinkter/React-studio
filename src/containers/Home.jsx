import React from "react";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";

const mapStateToProps = (state) => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

const Home = (props) => {
    const { myList, trend, originals } = props;

    const l01 = (
        <Categories>
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
    );

    return <React.Fragment>{l01}</React.Fragment>;
};

export default connect(mapStateToProps, null)(Home);
