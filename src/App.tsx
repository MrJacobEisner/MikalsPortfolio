import "./globals.ts";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.scss";
import * as animations from "./animations";

function App() {
    return (
        <div className="App">
            <div className="nav-bar shadow p-3 mb-5 w-100">
                <Logo className="logo" fill="white" />
                <div id="nav_dot" className="dot"></div>
                <div className="nav-items">About</div>
                <div className="nav-items">Experience</div>
                <div className="nav-items">Resumé</div>
                <div className="nav-items">Contact</div>
            </div>
            <div className="tester">
                <button onClick={() => animations.dotExtend()}>click me</button>
            </div>
        </div>
    );
}

export default App;
