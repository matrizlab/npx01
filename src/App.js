import React from "react";
import "./App.css";

import InputEvents from "./events/InputEvents";
import MovementEvents from "./events/MovementEvents";
import "./events/Events.css";

function App() {
  return (
    <div className="App">
      <InputEvents />
      <MovementEvents />
    </div>
  );
}

export default App;
