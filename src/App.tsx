import "./globals.ts";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.scss";
import * as animations from "./animations";

function App() {
    return (
        <div className="App">
            <div className="nav-bar shadow p-3 mb-5 w-100">
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
            {/* <div className="tester">this is some data</div> */}
            <div id="mainBody">
                {/* <div className="greeting">console.log("Hi! I'm Mikal")</div> */}
                <div className="greeting">
                    <span id="beginingGreeting">{`std::cout << "`}</span>
                    {/* <span id="beginingGreeting">{`echo `}</span> */}
                    <span style={{ color: "white" }}>Hi! I'm Mikal</span>
                    <span id="endingGreeting">{`" << endl;`}</span>
                </div>
            </div>
        </div>
    );
}

export default App;
