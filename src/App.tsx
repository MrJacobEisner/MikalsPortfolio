import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as GithubLogo } from "./images/github.svg";
import { ReactComponent as EmailIcon } from "./images/email.svg";
import { ReactComponent as ScrollIcon } from "./images/scroll.svg";
import tnm_bck from "./images/tnm.png";
import ualberta_bck from "./images/ualberta.jpeg";
import Card from "./components/Card";
import * as helpers from "./helpers";
import "./globals.ts";
import "./App.scss";

function setup() {
    // changing the text of my thing
    setInterval(() => {
        helpers.changeText();
    }, 5000);

    // addEventListener("scroll", (event) => {});
    // window.onscroll = function () {
    //     helpers.scrollButton();
    // };
}

function App() {
    setup();

    return (
        <div
            className="App"
            onScroll={() => {
                helpers.scrollButton();
            }}
        >
            {/* NAV BAR */}
            <ScrollIcon
                id="scroll-button"
                className="fade"
                onClick={() => {
                    document.getElementsByClassName("nav-bar")[0].scrollIntoView({ behavior: "smooth" });
                }}
            />
            <div className="nav-bar">
                <Logo className="logo" />
                <a className="nav-item clickable" onClick={() => helpers.navigate("about")}>
                    About
                </a>
                <a className="nav-item clickable" onClick={() => helpers.navigate("experience")}>
                    Experience
                </a>
                <a className="nav-item clickable" onClick={() => helpers.navigate("")}>
                    Resumé
                </a>
                <a className="nav-item clickable" onClick={() => helpers.navigate("footer")}>
                    Contact
                </a>
                {/* <hr id="indicator" className="nav-item white-highlight"></hr> */}
            </div>
            {/* Body */}
            <main id="mainBody">
                <div id="about" className="about">
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

                <div id="experience" className="experience">
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
            <footer id="footer">
                <div className="contact-info">
                    <GithubLogo
                        className="contact-logos clickable"
                        onClick={() => {
                            helpers.openUrl("https://github.com/MikalKotadia");
                        }}
                    />
                    <EmailIcon
                        className="contact-logos clickable"
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
