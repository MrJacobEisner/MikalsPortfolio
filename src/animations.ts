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

export function changeText() {
    let begining_greeting: HTMLElement | null = document.getElementById("beginingGreeting");
    let ending_greeting: HTMLElement | null = document.getElementById("endingGreeting");
    const greetings = [
        [`std::cout << "`, `" << endl;`],
        [`console.log("`, `");`],
        [`printf("`, `");`],
        [`echo '<p>`, `</p>';`],
        [`print("`, `")`],
        [`MsgBox("`, `")`],
    ];
    let greeting_num: number = Math.floor(Math.random() * greetings.length);
    let greeting: string[] = greetings[greeting_num];
    begining_greeting!.innerText = greeting[0];
    ending_greeting!.innerText = greeting[1];
    // for (const greeting of greetings) {
    // }
    return;
}
