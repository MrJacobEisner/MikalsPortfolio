import React from "react";
import "./Card.scss";

function animateCard(clicked: boolean, id: string) {
    let card: CSSStyleDeclaration = document.getElementById(id + "-info")!.style;
    let card_text: CSSStyleDeclaration = document.getElementById(id + "-info-text")!.style;

    let opening: boolean = card.width === "0%" ? true : false;

    // BUG: when closing if leave hover and re-enter, the text is still there
    if (clicked && opening) {
        card.width = "90%";
        setTimeout(() => {
            card_text.opacity = "100%";
        }, 400);
    } else {
        // animate text out
        card_text.opacity = "0%";
        setTimeout(() => {
            card.width = "0%";
        }, 350);
    }
    return;
}

interface CardProperties {
    backgroundImage: string;
    infoColorRgb: string;
    height?: string;
    heading: string;
    subHeading: string;
    id: string;
    children?: JSX.Element;
    // children?: string;
}

export default function Card(properties: CardProperties) {
    let img: string = `url('${properties.backgroundImage}')`;

    // test.getColor(properties.backgroundImage);

    const cont_styles: React.CSSProperties = {
        height: properties.height,
    };

    const img_styles: React.CSSProperties = {
        backgroundImage: img,
    };

    return (
        <div
            className="card"
            style={cont_styles}
            onMouseLeave={() => {
                animateCard(false, properties.id);
            }}
            onClick={() => {
                animateCard(true, properties.id);
            }}
        >
            <div className="bck-img" style={img_styles} />
            <div className="content">
                <h2>{properties.heading}</h2>
                <p className="subheading">{properties.subHeading}</p>
                <div
                    id={`${properties.id}-info`}
                    className="info"
                    style={{ backgroundColor: `rgb(${properties.infoColorRgb})`, width: "0%" }}
                >
                    <div id={`${properties.id}-info-text`} className="info-text">
                        {properties.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

// default export Card;
