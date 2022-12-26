import "./App.scss"
import "./globals"

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
