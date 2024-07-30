/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import Jasem from "./components/Jasem";

function App() {
  const [name, setName] = useState<string>("22");
  return (
    <>
      <Jasem name="jasem" setName={() => console.log("hello")} />
    </>
  );
}

export default App;
