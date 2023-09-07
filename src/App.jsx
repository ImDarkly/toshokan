import Button from "./components/Button/Button";
import Pane from "./components/Pane/Pane";
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";
import Topbar from "./components/Topbar/Topbar";
import Tabbar from "./components/Tabbar/Tabbar";

function App() {
    return (
        <div>
            <Topbar />
            <Tabbar />
            <Accordion />
        </div>
    )
}

export default App;
