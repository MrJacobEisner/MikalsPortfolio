import React from "react";
import "./Card.scss";

interface CardProperties {
    // children?: JSX.Element;
    backgroundImage: string;
    height?: string;
    heading: string;
    subHeading: string;
}

export default function Card(properties: CardProperties) {
    let img: string = "url(" + "'" + properties.backgroundImage + "')";
    let height = properties.height == null ? "35%" : properties.height;

    const cont_styles: React.CSSProperties = {
        height: properties.height,
    };

    const img_styles: React.CSSProperties = {
        backgroundImage: img,
    };

    return (
        <div className="card" style={cont_styles}>
            <div className="bck-img" style={img_styles} />
            <div className="content">
                <h2>{properties.heading}</h2>
            </div>
        </div>
    );
}

// default export Card;
