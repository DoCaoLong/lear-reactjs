import "./App.css";
import { Dropdown } from "./components/inversion-of-control";
// import { GlobalStyles } from "./GlobalStyles";

const options = [
    {
        title: "Fullstack Developer",
        onClick: () => {},
    },
    {
        title: "FrontEnd",
        onClick: () => {},
    },
    {
        title: "Backend",
        onClick: () => {},
    },
];
function App() {
    return (
        <div>
            {/* <GlobalStyles /> */}
            {/* <Dropdown
                placeholder={`Please select your job`}
                options={options}
                inputPlaceholder={`Search your job ...`}
                visibleIconCheck
                visibleSearch={true}
            ></Dropdown> */}
            <Dropdown
                placeholder={`Please select your job`}
                options={options}
                inputPlaceholder={`Search your job ...`}
                visibleIconCheck
                visibleSearch={true}
            ></Dropdown>
        </div>
    );
}

export default App;
