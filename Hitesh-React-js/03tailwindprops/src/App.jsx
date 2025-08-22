import { useState } from "react";
import "./App.css";
import Card from "./Component/Cards/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl text-black underline p-4 inline rounded mt-4 bg-indigo-300">
        I am uses tailwind css in vite react js
      </h1>

      <Card/>
    </>
  );
}

export default App;
