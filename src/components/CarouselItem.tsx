import "./CarouselItem.scss";
import React from "react";

function animateInfoIn(id: string) {
    let preview_info: HTMLElement | null = document.getElementById("previewInfo" + id);
    let carousel_heading: HTMLElement | null = document.getElementById("carouselHeading" + id);
    let carousel_subheading: HTMLElement | null = document.getElementById("carouselSubheading" + id);
    let expanded_info: HTMLElement | null = document.getElementById("expandedInfo" + id);
    // let children: HTMLCollection | undefined = preview_info?.children;

    // if (children) {
    //     for (let i = 0; i < children.length; i++) {
    //         let child: Element = children[i];
    //         child.classList.add("fade");
    //         setTimeout(() => {
    //             child.classList.add("hide");
    //         }, 250);
    //     }
    // }
    carousel_subheading?.classList.add("fade");
    preview_info?.classList.add("animate-info-forwards");

    // after animation is done, switch to the proper element
    setTimeout(() => {
        expanded_info?.classList.remove("hide");
        preview_info?.classList.add("hide");
        preview_info?.classList.remove("animate-info-forwards");

        // remove this in favour of a close button
        window.addEventListener(
            "click",
            () => {
                animateInfoOut(id);
            },
            { once: true }
        );
    }, 750);
}

function animateInfoOut(id: string) {
    let preview_info: HTMLElement | null = document.getElementById("previewInfo" + id);
    let expanded_info: HTMLElement | null = document.getElementById("expandedInfo" + id);
    let carousel_subheading: HTMLElement | null = document.getElementById("carouselSubheading" + id);

    expanded_info?.classList.add("animate-info-backwards");

    setTimeout(() => {
        preview_info?.classList.remove("hide");
        expanded_info?.classList.add("hide");
        carousel_subheading?.classList.remove("fade");

        expanded_info?.classList.remove("animate-info-backwards");
    }, 500);
}

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
    let hidden: string = props.id === "0" ? "" : "hide fade";

    return (
        <div id={"carouselItem" + props.id} className={"carousel-item " + hidden} style={img_styles}>
            <div
                id={"previewInfo" + props.id}
                className="clickable preview-info"
                onClick={() => {
                    animateInfoIn(props.id);
                }}
            >
                <h3 id={"carouselHeading" + props.id}>{props.heading}</h3>
                <p id={"carouselSubheading" + props.id}>{props.subHeading}</p>
            </div>
            <div id={"expandedInfo" + props.id} className="expanded-info hide">
                <h3>{props.heading}</h3>
            </div>
        </div>
    );
}
