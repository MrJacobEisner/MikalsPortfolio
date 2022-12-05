import "./App.scss"
import "./globals"

export function dotExtend(){
    let dot = document.getElementById("nav_dot")?.style;
    dot!.gridColumn = "3";
    // document.getElementById("nav_dot")!.style.gridColumn = "4";
    // dot!.width ="100px";
    // dot!.style.backgroundColor = "white";
    // dot?.style
    console.log("test");
}
