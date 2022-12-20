import { ReactComponent as Logo } from "./logo.svg";
import "./globals.ts";
import "./App.scss";
// import variables from "./variables.module.scss";
import * as animations from "./animations";

function App() {
    // changing the text of my thing
    setInterval(() => {
        animations.changeText();
    }, 5000);

    return (
        <div className="App">
            <div className="nav-bar shadow-lg mb-5 p-3">
                <Logo className="logo" />
                <div className="nav-item white-highlight" onClick={() => animations.moveIndicator(1)}>
                    About
                </div>
                <div className="nav-item white-highlight" onClick={() => animations.moveIndicator(2)}>
                    Experience
                </div>
                <div className="nav-item white-highlight" onClick={() => animations.moveIndicator(3)}>
                    Resumé
                </div>
                <div className="nav-item white-highlight" onClick={() => animations.moveIndicator(4)}>
                    Contact
                </div>
                <hr id="indicator" className="nav-item white-highlight"></hr>
            </div>
            <main id="mainBody">
                <div className="greeting">
                    <span id="beginingGreeting"></span>
                    <span style={{ color: "white" }}>Hi! I'm Mikal</span>
                    <span id="endingGreeting"></span>
                </div>
                <p className="intro-p">
                    I am an honours CS student at the University of Alberta with a passion for any and all technology. Besides
                    programming, I love listening to music, gaming, and working out.
                </p>
            </main>
        </div>
    );
}

export default App;
