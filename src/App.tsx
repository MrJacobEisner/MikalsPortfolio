import "./App.scss";
// images
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as GithubLogo } from "./images/github.svg";
import { ReactComponent as EmailIcon } from "./images/email.svg";
import { ReactComponent as ScrollIcon } from "./images/scroll.svg";
import { ReactComponent as LinkedinIcon } from "./images/linkedin.svg";

import tnm_bck from "./images/tnm.png";
import ualberta_bck from "./images/ualberta.jpeg";
import hacked_bck from "./images/HackEd.jpg";
import shell_bck from "./images/shell.png";
import interpreter_back from "./images/interpreter.png";
import hackEd_video from "./videos/hackEd.mp4";
import shell_video from "./videos/shell.mp4";
import interpreter_video from "./videos/interpreter.mp4";

// components
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import * as helpers from "./helpers";
import React from "react";
import CarouselItem from "./components/CarouselItem";

function App() {
    helpers.setup();

    return (
        <div
            className="App"
            onScroll={() => {
                helpers.scrollButton();
            }}
        >
            <div className="nav-bar">
                <Logo className="logo" />
                <a className="nav-item clickable" onClick={() => helpers.navigate("about")}>
                    <b>About</b>
                </a>
                <a className="nav-item clickable" onClick={() => helpers.navigate("projects")}>
                    <b>Projects</b>
                </a>
                <a className="nav-item clickable" onClick={() => helpers.navigate("experience")}>
                    <b>Work Experience</b>
                </a>
                <a className="nav-item clickable" onClick={() => helpers.navigate("footer")}>
                    <b>Contact</b>
                </a>
                {/* <hr id="indicator" className="nav-item white-highlight"></hr> */}
            </div>
            {/* Body */}
            <main id="mainBody">
                <div id="about" className="about">
                    <h1>Hi! Im Mikal!</h1>
                    <p className="intro-p">
                        I am an honours CS student at the University of Alberta with a passion for any and all technology. Besides
                        programing, I love listening to music, working out, and playing with my 2 cats and 1 dog. While primarily a
                        back-end developer, I have experience in front-end design, and have built some apps as a full-stack dev.
                    </p>
                </div>
                <div id="projects" className="projects">
                    <h1>Projects</h1>
                    <Carousel>
                        <CarouselItem
                            backgroundImage={hacked_bck}
                            heading="BeyondControl"
                            subHeading="HackEd 2023"
                            projectLink="https://github.com/Kuiper-HackEd2023/BeyondControl-Kuiper"
                            id="0"
                        >
                            <video controls muted>
                                <source src={hackEd_video} type="video/mp4"></source>
                            </video>
                            <div>
                                <h4>Description</h4>
                                <p>
                                    A guesture navigation system for windows written in <b>python</b> that utilizes <b>media pipe</b>{" "}
                                    and <b>opencv</b>. A custom classifier using the library <b>keras</b> was trained on differnt
                                    handsigns and then would associate them with the corresponding windows functions.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem
                            backgroundImage={shell_bck}
                            heading="Unix Shell"
                            subHeading="Operating Systems Class Project"
                            projectLink="To view the source, please contact me."
                            id="1"
                        >
                            <video controls muted>
                                <source src={shell_video} type="video/mp4"></source>
                            </video>
                            <div>
                                <h4>Description</h4>
                                <p>
                                    This shell, written in <b>C++</b>, utilized knowledge of processes (spawning, killing, suspending,
                                    resuming) and maintaining each process' state in a custom <b>process table</b>. In addition, the
                                    shell is capable of running processes in the background.
                                </p>
                                <p>
                                    Other projects from this class include the
                                    <b> producer-consumer problem</b> utilizing <b>threads</b> and <b>semaphores</b>, as well as a
                                    modified version of the same problem using <b>sockets</b>.
                                </p>
                            </div>
                        </CarouselItem>
                        {/* TODDO: re-record video and take bck to remove student id */}
                        <CarouselItem
                            backgroundImage={interpreter_back}
                            heading="Functional Language Interpreter"
                            subHeading="Non-procedural Programing Class Project"
                            projectLink="To view the source, please contact me."
                            id="2"
                        >
                            <video controls muted>
                                <source src={interpreter_video} type="video/mp4"></source>
                            </video>
                            <div>
                                <h4>Description</h4>
                                <p>
                                    An interpreter for a lisp-like functional laguage written in <b>lisp</b>. This interpreter uses{" "}
                                    <b>applicative order reductions</b> and can handle <b>higher order</b> user-defined functions
                                </p>
                                <p>
                                    Some other skills aquired include: <b>prolog</b>, <b>answer set programing</b>, and{" "}
                                    <b>constraint logic programing</b>.
                                </p>
                            </div>
                        </CarouselItem>
                    </Carousel>
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
                        {/* 
                        <div>
                            <h3>Projects:</h3>
                            <ul>
                                <li>
                                    Cadmus - A headless or GUI based internal document generation system accessable through a REST API
                                </li>
                            </ul>
                        </div> */}
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
            <div id="footer" className="footer">
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

            {/* render ontop of all */}
            <ScrollIcon
                id="scroll-button"
                className="fade"
                onClick={() => {
                    document.getElementsByClassName("nav-bar")[0].scrollIntoView({ behavior: "smooth" });
                }}
            />
        </div>
    );
}

export default App;
