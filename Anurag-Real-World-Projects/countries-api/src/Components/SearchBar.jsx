import React from "react";

export default function SearchBar({setQuary}) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input onChange={(e) => setQuary(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..." />
      </div>
    </>
  );
}
