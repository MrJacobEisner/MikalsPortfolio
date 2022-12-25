import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as GithubLogo } from "./images/github.svg";
import { ReactComponent as EmailIcon } from "./images/email.svg";
import tnm_bck from "./images/tnm.png";
import ualberta_bck from "./images/ualberta.jpeg";
import Card from "./components/Card";
import * as helpers from "./helpers";
import "./globals.ts";
import "./App.scss";
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
                <div className="about">
                    <div className="greeting">
                        <h1 id="beginingGreeting"></h1>
                        <h1 style={{ color: "white" }}>Hi! I'm Mikal</h1>
                        <h1 id="endingGreeting"></h1>
                    </div>
                    <p className="intro-p">
                        I am an honours CS student at the University of Alberta with a passion for any and all technology. Besides
                        programming, I love listening to music, gaming, and working out.
                    </p>
                </div>

                <div className="experience">
                    <h1>Experience</h1>
                    <Card
                        backgroundImage={tnm_bck}
                        heading="True North Mortgage"
                        subHeading="Student Software Developer (Summers 2022 - Present)"
                    />
                    <Card
                        backgroundImage={ualberta_bck}
                        heading="UAlberta"
                        subHeading="Computing Science TA (January 2022 - April 2022)"
                    />
                </div>
            </main>
            {/* Footer */}
            <footer>
                <div className="contact-info">
                    <GithubLogo
                        className="contact-logos"
                        onClick={() => {
                            helpers.openUrl("https://github.com/MikalKotadia");
                        }}
                    />
                    <EmailIcon
                        className="contact-logos"
                        onClick={() => {
                            helpers.openUrl("mailto:mikal.m.kotadia@gmail.com");
                        }}
                    />
                </div>
            </footer>
        </div>
    );
}

export default App;
