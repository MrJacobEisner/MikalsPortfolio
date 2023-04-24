import "./Carousel.scss";
import { ReactComponent as ScrollIcon } from "../images/scroll.svg";
interface CauroselProperties {
    children?: JSX.Element | JSX.Element[];
}

export default function Carousel(props: CauroselProperties) {
    return (
        <div className="carousel">
            <ScrollIcon className="back"></ScrollIcon>
            <ScrollIcon className="next"></ScrollIcon>
            {/* <div className="indicators"></div> */}
            <div className="view">{props.children}</div>
        </div>
    );
}
