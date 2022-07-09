import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableDifference from "./tableDifference";

function App() {
  const [count, setCount] = useState(9);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 50,
      }}
    >
      <div style={{ width: "200px" }}>
        <label>Please input number, if you wont change number</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TableDifference count={count} type="One" />
        <TableDifference count={count} type="Two" />
      </div>
    </div>
  );
}

export default App;
