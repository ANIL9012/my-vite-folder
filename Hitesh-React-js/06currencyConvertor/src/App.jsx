import { useState } from "react";
import "./App.css";
import UseCurrencyInfo from "./Hooks/UseCurrencyInfo";

function App() {
  // yahan hook ko call karna hai
  const data = UseCurrencyInfo("USD"); // yahan tum currency pass kar sakte ho

  return (
    <>
      <h1 className="text-pink-600 text-4xl">Currency Convertor Project</h1>

      {/* Object ko direct render mat karo, JSON.stringify ya specific field dikhayo */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
