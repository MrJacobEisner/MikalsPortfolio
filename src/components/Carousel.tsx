import "./Carousel.scss";
import { ReactComponent as ScrollIcon } from "../images/scroll.svg";

import { useState } from "react";

function changeElement(changeIndex: Function, prev_index: number, num_items: number, forwards: boolean) {
    // let num_items = ids.length;

    let index: number;
    if (forwards) {
        index = prev_index === num_items - 1 ? 0 : prev_index + 1;
    } else {
        index = prev_index === 0 ? num_items - 1 : prev_index - 1;
    }
    changeIndex(index);

    let prev_item: HTMLElement | null = document.getElementById("carouselItem" + prev_index);
    let next_item: HTMLElement | null = document.getElementById("carouselItem" + index);

    prev_item?.classList.add("fade");
    next_item?.classList.remove("fade");
    next_item?.classList.remove("hide-item");
    // prev_item?.classList.add("hide-item");
    setTimeout(() => {
        prev_item?.classList.add("hide-item");
    }, 750);
}

interface CauroselProperties {
    children: JSX.Element | JSX.Element[];
}

export default function Carousel(props: CauroselProperties) {
    const [index, setIndex] = useState(0);

    // making the items guaranteed iterable
    // let items: JSX.Element[];
    let num_items: number;

    if (Array.isArray(props.children)) {
        num_items = props.children.length;
    } else {
        num_items = 1;
    }

    return (
        <div className="carousel">
            <div
                id="L-panel"
                className="blur-panels active clickable"
                onClick={() => changeElement(setIndex, index, num_items, false)}
            >
                <ScrollIcon id="back-arrow" className="arrow"></ScrollIcon>
            </div>
            <div id="R-panel" className="blur-panels active clickable" onClick={() => changeElement(setIndex, index, num_items, true)}>
                <ScrollIcon id="next-arrow" className="arrow"></ScrollIcon>
            </div>
            {/* <div className="indicators"></div> */}
            <div className="view">{props.children}</div>
        </div>
    );
}
