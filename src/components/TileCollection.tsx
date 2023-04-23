import React from "react";
import "./TileCollection.scss";

interface TileCollectionProperties {
    children: JSX.Element | JSX.Element[];
}
// // default export Card;
export default function TileCollection(properties: TileCollectionProperties) {
    // Making sure that the childrent is iterable
    // let children_arr: JSX.Element[];
    // if (Array.isArray(properties.children)) {
    //     children_arr = properties.children;
    // } else {
    //     children_arr = [properties.children];
    // }

    // // console.log();

    // for (let i = 0; i < children_arr.length; i++) {
    //     console.log(i);
    // }

    // return <div className="collection">{properties.children}</div>;
    return <div className="collection-background"></div>;
}
