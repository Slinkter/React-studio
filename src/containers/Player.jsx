import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoSource } from "../actions/index";
import NotFound from "./NotFound";

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
    };
};

const mapDispatchToProos = {
    getVideoSource,
};

const Player = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const hasPlaying = Object.keys(props.playing).length > 0;
    const handleBack = () => {
        navigate(-1);
    };

    React.useEffect(() => {
        props.getVideoSource(id);
    }, []);

    const showVideo = (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" className="" onClick={handleBack}>
                    Regresar
                </button>
            </div>
        </div>
    );

    return hasPlaying ? showVideo : <NotFound />;
};

export default connect(mapStateToProps, mapDispatchToProos)(Player);
