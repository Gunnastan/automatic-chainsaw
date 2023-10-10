import "./App.css";
import React, { useState } from "react";
import Email from "./components/Email";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Email state={state} setState={setState} />
      <Navbar toggle={toggle} />
      <Text />
      <Header />
    </div>
  );
}

export default App;
