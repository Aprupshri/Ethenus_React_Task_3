import React, { useState } from "react";
import "./App.css";

function App() {
  const colors = [
    "red",
    "lime",
    "blue",
    "yellow",
    "brown",
    "cyan",
    "darkorange",
    "lightpink",
    "green",
    "gold",
    "orangered",
    "fuchsia",
    "yellowgreen",
  ];

  const [background, setBackground] = useState("#1111");

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className="App_output" style={{ background: background }}>
        <div className="color_strip">
          {colors.map((color, index) => (
            <div key={index} className="card">
              <div
                style={{
                  position: "relative",
                  background: color,
                  filter: "brightness(85%)",
                  boxShadow: color === background ? "0 0 5px #000" : "",
                }}
                className="box"
                onClick={() => setBackground(color)}
              />
            </div>
          ))}
          <br />
          <br />
          <br />
          <button
            style={{
              display: "block",
              position: "absolute",
              margin: "10%",
              marginLeft: "45%",
              marginTop: "7%",
            }}
          >
            Pick a Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
