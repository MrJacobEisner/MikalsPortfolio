import React from "react";
import "./typewriter.scss";

interface properties {
    children: React.ReactNode;
}

function typewriter(props: properties) {
    return (
        <div className="typewriter">
            <h1>{props.children}</h1>
        </div>
    );
}
export default typewriter;
