import "./globals.ts";
// import logo from './logo.svg';
import "./App.scss";
import Typewriter from "./components/typewriter/Typewriter";

function App() {
    return (
        <div className="App">
            <div className="introdution">
                <Typewriter>Mikal Kotadia</Typewriter>
            </div>

            <div className="skills"></div>

            <div className="projects"></div>

            <div className="experience"></div>

            {/* <p>This is the first test in my portfolio site!</p> */}
        </div>
    );
}

export default App;
