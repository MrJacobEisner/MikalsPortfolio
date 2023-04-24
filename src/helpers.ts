import "./App.scss"
import React from "react";

export function setup() {
    // Haneling if on moblie (init small window width)
    if (window.innerWidth <= 500) {
        // need the ui to load so we wait.
        setTimeout(() => {
            hideNav();
        }, 100);
    }

    // changing the text of my thing
    // setInterval(() => {
    //     changeText();
    // }, 5000);

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 500) {
            setTimeout(() => {
                hideNav();
            }, 750);
        } else {
            showNav();
        }
    });
}


export function navigate(id: string){
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
}

export function changeText() {
    let begining_greeting: HTMLElement | null = document.getElementById("beginingGreeting");
    let ending_greeting: HTMLElement | null = document.getElementById("endingGreeting");
    const greetings = [
        [`std::cout << "`, `" << endl;`],
        [`console.log("`, `");`],
        [`echo '<p>`, `</p>';`],
        [`print("`, `")`],
        [`MsgBox("`, `")`],
        // [`echo \ `, ``],
    ];
    let greeting_num: number = Math.floor(Math.random() * greetings.length);
    let greeting: string[] = greetings[greeting_num];

    begining_greeting?.classList.add("fade");
    ending_greeting?.classList.add("fade");
    
    setTimeout(() => {
        begining_greeting!.innerText = greeting[0];
        ending_greeting!.innerText = greeting[1];
        // begining_greeting!.innerHTML = greeting[0];
        // ending_greeting!.innerHTML = greeting[1];
        
        begining_greeting?.classList.remove("fade");
        ending_greeting?.classList.remove("fade");

    }, 2500)
    return;
}

export function openUrl(url: string){
    window.open(url, "_blank")?.focus()
}

export function scrollButton() {
    const app: Element = document.getElementsByClassName("App")[0];
    let scroll_button: HTMLElement | null = document.getElementById("scroll-button");
    if (app.scrollTop > 75) {
        // console.log("working");
        scroll_button?.classList.remove("fade")
        scroll_button?.classList.add("clickable")
        return;
    }
    scroll_button?.classList.add("fade");
    scroll_button?.classList.remove("clickable")
}

export function hideNav() {
    let nav_items: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-item");
    for (let i = 0; i < nav_items.length; i++) {
        nav_items[i].classList.add("hidden");
    }
}

export function showNav() {
    let nav_items: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-item");
    for (let i = 0; i < nav_items.length; i++) {
        let nav_item = nav_items[i];
        if (nav_item.classList.contains("hidden")) {
            nav_item.classList.remove("hidden");
        }
        // .classList.add("hidden");
    }
}
