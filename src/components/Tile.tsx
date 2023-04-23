import React from "react";
import "./Tile.scss";

function animateCard(id: string) {
    let card: CSSStyleDeclaration = document.getElementById(id + "-info")!.style;
    let card_text: CSSStyleDeclaration = document.getElementById(id + "-info-text")!.style;

    let opening: boolean = card.width === "0%" ? true : false;

    // BUG: when closing if leave hover and re-enter, the text is still there
    if (opening) {
        card.width = "90%";

        setTimeout(() => {
            // close the card if click anywhere outside.
            window.addEventListener(
                "click",
                () => {
                    animateCard(id);
                },
                { once: true }
            );

            card_text.opacity = "100%";
        }, 400);

        return;
    }

    // animate text out
    card_text.opacity = "0%";
    setTimeout(() => {
        card.width = "0%";
    }, 350);
    return;
}

interface TileProperties {
    backgroundImage: string;
    infoColorRgb: string;
    height?: string;
    heading: string;
    subHeading: string;
    id: string;
    children?: JSX.Element | JSX.Element[];
    // children?: string;
}

export default function Tile(properties: TileProperties) {
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
            className="tile"
            style={cont_styles}
            onClick={() => {
                animateCard(properties.id);
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

// interface TileCollectionProperties {
//     // children?: JSX.Element | JSX.Element[];
//     // children?: React.ReactNode;
//     children?: React.ReactFragment;
//     // tile_properties?: TileProperties | TileProperties[];
// }
// // default export Card;
// export function TileCollection(properties: TileCollectionProperties) {
//     return <div className="collection">{properties.children}</div>;
// }
