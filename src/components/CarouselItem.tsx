import "./CarouselItem.scss";
import React from "react";
interface CarouselItemProperties {
    backgroundImage: string;
    heading: string;
    subHeading: string;
    id: string;
}

export default function CarouselItem(props: CarouselItemProperties) {
    let img: string = `url('${props.backgroundImage}')`;
    const img_styles: React.CSSProperties = {
        backgroundImage: img,
    };

    // do not hide the first item in the carousel
    let hidden: string = props.id === "0" ? "" : "hide-item";

    return (
        <div id={"carouselItem" + props.id} className={"carousel-item " + hidden} style={img_styles}>
            <div className="preview-info">
                <h3>{props.heading}</h3>
                <p>{props.subHeading}</p>
            </div>
            <div className="expanded-info"></div>
        </div>
    );
}
