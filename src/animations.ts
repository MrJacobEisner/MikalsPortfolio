import "./App.scss"
import "./globals"

export function moveIndicator(num: number){
    let indicator = document.getElementById("indicator");
    let indicator_style = indicator?.style;
    indicator_style!.opacity = "0%";
    setTimeout(() => {
        indicator_style!.gridColumnStart = String(num + 1);
        indicator_style!.gridColumnEnd = String(num + 2);
        indicator_style!.opacity = "100%";
    }, 360)
}

// export function indOnHover(column: number){
//     let indicator = document.getElementById("indicator")?.style;
//     let currentColumnEnd: number = Number(indicator!.gridColumnEnd);
//     console.log(currentColumnEnd);
//     indicator!.gridColumnEnd = String(end_column);
// }
