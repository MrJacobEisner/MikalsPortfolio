import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as GithubLogo } from "./images/github.svg";
import { ReactComponent as EmailIcon } from "./images/email.svg";
import { ReactComponent as ScrollIcon } from "./images/scroll.svg";
import { ReactComponent as LinkedinIcon } from "./images/linkedin.svg";
import tnm_bck from "./images/tnm.png";
import ualberta_bck from "./images/ualberta.jpeg";
import Card from "./components/Card";
import Tile from "./components/Tile";
import TileCollection from "./components/TileCollection";
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
                    Work Experience
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
                    <h1>Hi! Im Mikal!</h1>
                    <p className="intro-p">
                        I am an honours CS student at the University of Alberta with a passion for any and all technology. Besides
                        programming, I love listening to music, gaming, and working out. While primarily a back-end developer, I have
                        experience in full-stack development.
                    </p>
                </div>
                <div className="projects">
                    <h1>Projects</h1>
                    <TileCollection>
                        <Tile
                            backgroundImage={tnm_bck}
                            heading="True North Mortgage"
                            subHeading="Student Software Developer (Summers 2022 - Present)"
                            id="test"
                            infoColorRgb="36, 65, 122"
                        ></Tile>
                        <Tile
                            backgroundImage={tnm_bck}
                            heading="True North Mortgage"
                            subHeading="Student Software Developer (Summers 2022 - Present)"
                            id="test2"
                            infoColorRgb="36, 65, 122"
                        ></Tile>
                    </TileCollection>
                </div>
                <div id="experience" className="experience">
                    <h1>Work Experience</h1>
                    <Card
                        backgroundImage={tnm_bck}
                        heading="True North Mortgage"
                        subHeading="Student Software Developer (Summers 2022 - Present)"
                        id="tnm"
                        infoColorRgb="36, 65, 122"
                    >
                        <div>
                            <h3>Technologies used:</h3>
                            <ul>
                                <li>PHP with the Yii2 framework</li>
                                <li>Python3</li>
                                <li>React Typescript</li>
                                <li>Docker</li>
                                <li>Redis</li>
                                <li>PostgreSQL</li>
                                <li>Figma</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Overview:</h3>
                            <p>
                                Primarily in a full-stack position working on new projects, with the occational writing of scripts and
                                tools to help with internal development.
                            </p>
                        </div>

                        <div>
                            <h3>Projects:</h3>
                            <ul>
                                <li>
                                    Cadmus - A headless or GUI based internal document generation system accessable through a REST API
                                </li>
                            </ul>
                        </div>
                    </Card>
                    <Card
                        backgroundImage={ualberta_bck}
                        heading="University of Alberta"
                        subHeading="Computing Science Teaching Assistant (January 2023 - April 2023)"
                        id="uofa"
                        infoColorRgb="39, 93, 56"
                    >
                        <div>
                            <h3>Skills Required:</h3>
                            <ul>
                                <li>Python3</li>
                                <li>Good Commuication with non-programmers</li>
                                <li>Fast code tracing and understanding</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Overview:</h3>
                            <p>
                                The teaching assistant position required the ability to clearly and consicely explain programing
                                concepts to new students and aid them in the finding and solving of bugs within their programs.
                            </p>
                        </div>
                    </Card>
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
