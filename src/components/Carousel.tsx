import "./Carousel.scss";
import { ReactComponent as ScrollIcon } from "../images/scroll.svg";

import { useState } from "react";
interface CauroselProperties {
    children?: JSX.Element | JSX.Element[];
}

export default function Carousel(props: CauroselProperties) {
    const [index, setIndex] = useState(0);

    return (
        <div className="carousel">
            <div id="L-panel" className="blur-panels active clickable">
                <ScrollIcon id="back-arrow"></ScrollIcon>
            </div>
            <div id="R-panel" className="blur-panels active clickable">
                <ScrollIcon id="next-arrow"></ScrollIcon>
            </div>
            {/* <div className="indicators"></div> */}
            <div className="view">{props.children}</div>
        </div>
    );
}
