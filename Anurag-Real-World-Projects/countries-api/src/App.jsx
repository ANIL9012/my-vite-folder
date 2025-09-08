import "./App.css";
import React, { useState } from "react";
import CountriesList from "./Components/CountriesList";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";

function App() {
  const [quary, setQuary] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuary={setQuary} />
          <SelectMenu />
        </div>
        <CountriesList quary={quary} />
      </main>
    </>
  );
}

export default App;
