import "./Carousel.scss";
// import { sleep } from "../helpers";
import { ReactComponent as ScrollIcon } from "../images/scroll.svg";

import { useState } from "react";

function changeElement(changeIndex: Function, curr_index: number, num_items: number, forwards: boolean) {
    let index: number;
    // debugger;
    if (forwards) {
        index = curr_index === num_items - 1 ? 0 : curr_index + 1;
    } else {
        index = curr_index === 0 ? num_items - 1 : curr_index - 1;
    }
    changeIndex(index);

    let curr_item: HTMLElement | null = document.getElementById("carouselItem" + curr_index);
    let next_item: HTMLElement | null = document.getElementById("carouselItem" + index);

    next_item?.classList.remove("hide");
    next_item?.classList.remove("fade");
    curr_item?.classList.add("fade");
    setTimeout(() => {
        curr_item?.classList.add("hide");
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
            <div className="view">{props.children}</div>
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
        </div>
    );
}
