import "./CarouselItem.scss";
import React from "react";
interface CarouselItemProperties {
    backgroundImage: string;
    heading: string;
    subHeading: string;
    link: string;
}

export default function CarouselItem(properties: CarouselItemProperties) {
    let img: string = `url('${properties.backgroundImage}')`;
    const img_styles: React.CSSProperties = {
        backgroundImage: img,
    };

    return (
        <div className="carousel-item" style={img_styles}>
            <div className="main-view"></div>
        </div>
    );
}
