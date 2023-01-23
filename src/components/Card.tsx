import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./Card.scss";

function animateCard(clicked: boolean, id: string) {
    let card: CSSStyleDeclaration = document.getElementById(id + "-info")!.style;
    let card_text = document.getElementById(id + "-info-text")!.style;

    let opening: boolean = card.width == "0%" ? true : false;

    // if (!clicked) {
    //     // animate text out
    // }

    // card.width = !clicked || card.width != "0%" ? "0%" : "90%";
    card.width = !clicked || card.width != "0%" ? "0%" : "90%";
    if (clicked) {
        // animate text in
        return;
    } else {
        // animate text out
        return;
    }

    setTimeout(() => {
        card_text.opacity = "100%";
    }, 800);

    return;
}

interface CardProperties {
    // children?: JSX.Element;
    backgroundImage: string;
    infoColorRgb: string;
    height?: string;
    heading: string;
    subHeading: string;
    id: string;
    children?: string;
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
                    <p id={`${properties.id}-info-text`} className="info-text">
                        {properties.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

// default export Card;
