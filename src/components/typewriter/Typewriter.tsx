import "../../globals.ts";
import "./Typewriter.scss";

interface properties {
    children: React.ReactNode;
}

function Typewriter(props: properties) {
    return (
        <div className="typewriter">
            <h1>{props.children}</h1>
        </div>
    );
}
export default Typewriter;
