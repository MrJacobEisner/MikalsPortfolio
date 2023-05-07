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


export function openUrl(url: string | null){
    if (url) window.open(url, "_blank")?.focus();
    return;
    
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
        nav_items[i].classList.add("hide");
    }
}

export function showNav() {
    let nav_items: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-item");
    for (let i = 0; i < nav_items.length; i++) {
        let nav_item = nav_items[i];
        if (nav_item.classList.contains("hide")) {
            nav_item.classList.remove("hide");
        }
        // .classList.add("hidden");
    }
}

// from https://stackoverflow.com/a/49849482
export function isURL(url: string) {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };
