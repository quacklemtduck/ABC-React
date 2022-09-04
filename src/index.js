import React from "react";
import { createRoot } from "react-dom/client";
import BarChart from "./components/BarChart";
import Familytree from "./components/Familytree";
import { PopupInfoOverlay } from "./components/PopupInfo";
import ShoeSizes from "./components/ShoeSizes";
import "./index.css";

/* Family tree for Henning */
const lars = { Name: "Lars", Age: 20, ShoeSize: 46, Gender: "M", Children: [] };
const iben = { Name: "Iben", Age: 26, ShoeSize: 38, Gender: "F", Children: [] };
const andreas = {
  Name: "Andreas",
  Age: 22,
  ShoeSize: 42,
  Gender: "M",
  Children: [],
};
const bente = {
  Name: "Bente",
  Age: 46,
  ShoeSize: 37,
  Gender: "F",
  Children: [lars, andreas],
};
const viggo = {
  Name: "Viggo",
  Age: 47,
  ShoeSize: 42,
  Gender: "M",
  Children: [iben],
};
const henning = {
  Name: "Henning",
  Age: 65,
  ShoeSize: 44,
  Gender: "M",
  Children: [viggo, bente],
};

const members = [lars, iben, bente, viggo, henning, andreas];

class App extends React.Component {
  render() {
    console.log(henning);

    /*
      During the solution of the tasks, please consider handling crappy data.
    */
    //lars.Children = [henning];

    return (
      <div className="App">
        <PopupInfoOverlay />
        <div className="task-section">
          <div className="content">
            <h1>
              Write some code to show and navigate the family tree of Henning
            </h1>
            <Familytree members={members}></Familytree>
          </div>
        </div>
        <div className="task-section">
          <div className="content">
            <h1>Visualize the ages of the family in a bar chart</h1>
            <BarChart members={members} />
          </div>
        </div>
        <div className="task-section">
          <div className="content">
            <h1>Calculate and show the average shoe size per gender</h1>
            <ShoeSizes members={members}/>
          </div>
        </div>
      </div>
    );
  }
}
const container = document.getElementById("container");
const root = createRoot(container);
root.render(<App />);
