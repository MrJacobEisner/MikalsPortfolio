import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as GithubLogo } from "./images/github.svg";
import { ReactComponent as EmailIcon } from "./images/email.svg";
import { ReactComponent as ScrollIcon } from "./images/scroll.svg";
import { ReactComponent as LinkedinIcon } from "./images/linkedin.svg";
import tnm_bck from "./images/tnm.png";
import ualberta_bck from "./images/ualberta.jpeg";
import Card from "./components/Card";
import * as helpers from "./helpers";
import "./globals";
import "./App.scss";

function App() {
    helpers.setup();

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
                        id="tnm"
                        infoColorRgb="36, 65, 122"
                    >
                        <>
                            <h3>Technologies used</h3>
                            <ul>
                                <li>PHP with the Yii2 framework</li>
                                <li>Python3</li>
                                <li>React Typescript</li>
                            </ul>
                        </>
                        <h3>something in here</h3>
                    </Card>
                    <Card
                        backgroundImage={ualberta_bck}
                        heading="UAlberta"
                        subHeading="Computing Science TA (January 2023 - April 2023)"
                        id="uofa"
                        infoColorRgb="39, 93, 56"
                    ></Card>
                </div>
            </main>
            {/* using a div instead of a footer bc of scrolling issue on mobile */}
            <div className="footer">
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
                <LinkedinIcon
                    className="contact-logos clickable"
                    onClick={() => {
                        helpers.openUrl("https://www.linkedin.com/in/mikalkotadia");
                    }}
                />
            </div>
        </div>
    );
}

export default App;
