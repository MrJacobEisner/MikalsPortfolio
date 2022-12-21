import { ReactComponent as Logo } from "./images/logo.svg";
// import githubLogo from "./images/github-logo.png";
import { ReactComponent as GithubLogo } from "./images/github.svg";
import { ReactComponent as EmailIcon } from "./images/email.svg";
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
            {/* NAV BAR */}
            <div className="nav-bar">
                <Logo className="logo" />
                <a className="nav-item white-highlight" onClick={() => animations.moveIndicator(1)}>
                    About
                </a>
                <a className="nav-item white-highlight" onClick={() => animations.moveIndicator(2)}>
                    Experience
                </a>
                <a className="nav-item white-highlight" onClick={() => animations.moveIndicator(3)}>
                    Resumé
                </a>
                <a className="nav-item white-highlight" onClick={() => animations.moveIndicator(4)}>
                    Contact
                </a>
                <hr id="indicator" className="nav-item white-highlight"></hr>
            </div>
            {/* Body */}
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
            {/* Footer */}
            <footer>
                <div className="contact-info">
                    <GithubLogo className="contact-logos" />
                    <EmailIcon className="contact-logos" />
                </div>
            </footer>
        </div>
    );
}

export default App;
