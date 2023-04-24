import "./CarouselItem.scss";
import React from "react";
interface CarouselItemProperties {
    backgroundImage: string;
    heading: string;
    subHeading: string;
    link: string;
}

export default function CarouselItem(props: CarouselItemProperties) {
    let img: string = `url('${props.backgroundImage}')`;
    const img_styles: React.CSSProperties = {
        backgroundImage: img,
    };

    return (
        <div className="carousel-item" style={img_styles}>
            <div className="preview-info">
                <h3>{props.heading}</h3>
                <p>{props.subHeading}</p>
            </div>
            <div className="expanded-info"></div>
        </div>
    );
}
