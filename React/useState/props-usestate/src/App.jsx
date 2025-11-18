import { useState } from "react";
import ColorBox from "./ColorBox";
import "./index.css";

function App() {
  const [bgColor, setBgColor] = useState("black");

  return (
    <div className="main" style={{ backgroundColor: bgColor }}>
      <div className="box-container">
        <ColorBox color="red" onSelect={setBgColor} />
        <ColorBox color="yellow" onSelect={setBgColor} />
        <ColorBox color="blue" onSelect={setBgColor} />
      </div>
    </div>
  );
}

export default App;
