import "./Carousel.scss";
import { ReactComponent as ScrollIcon } from "../images/scroll.svg";
interface CauroselProperties {
    children?: JSX.Element | JSX.Element[];
}

export default function Carousel(props: CauroselProperties) {
    return (
        <div className="carousel">
            <div className="blurL">
                <ScrollIcon className="back-arrow"></ScrollIcon>
            </div>
            <div className="blurR">
                <ScrollIcon className="next-arrow"></ScrollIcon>
            </div>
            {/* <div className="indicators"></div> */}
            <div className="view">{props.children}</div>
        </div>
    );
}
