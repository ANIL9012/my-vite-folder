import { useState } from "react";
// import "./App.css";

import Header, {
  Login,
  Profile,
  Setting,
  Userkey,
} from "./Components/Header/Header";
import FruitList from "./Components/UseState/UseState";
import Toggle from "./Components/Toggle/Toggle";
import Props from "./Components/Props/Props";
import GetInput from "./Components/GetInput/GetInput";
import FormControl from "./Components/FormControl/FormControl";
import CheckboxSkills from "./Components/Checkbox/CheckboxSkills";
import HandleRadio from "./Components/Handle-Radio-Dropdown/HandleRadio";
import LoopJsx from "./Components/LoopinJSXwithMapFunction/LoopJsx";
import ArrayNestedLooping from "./Components/Array-Nested-Looping/ArrayNestedLooping";
import UseOfuseEffectHook from "./Components/use-of-useEffect-hook/useOfuseEffectHook";
import HandlePropsSideEffect from "./Components/Handle-Props-Side-Effect-with-useEffect/HandlePropsSideEffect";
import UseRefHook from "./Components/useRef Hook/UseRefHook";
import UncontrolledComponent from "./Components/uncontrolled component/UncontrolledComponent";
import PassFunction from "./Components/Pass-Function-in-Component-as-Props/PassFunction";
import ForwardRef from "./Components/ForwardRef/ForwardRef";
import UseFormStatus from "./Components/UseFormStatus/UseFormStatus";
import UseTransitionHook from "./Components/UseTransitionHook/UseTransitionHook";
import DerivedState from "./Components/DerivedState/DerivedState";
import AddUser from "./Components/LiftingStateUp/AddUser";
import DisplayUser from "./Components/LiftingStateUp/DisplayUser";
import UpdatingObjects from "./Components/UpdatingObjects/UpdatingObjects";
import UpdatingArray from "./Components/UpdatingArray/UpdatingArray";
import UseIdHook from "./Components/useIdHook/UseIdHook";

function App() {
  const [count, setCount] = useState(0);

  let userobj = {
    name: "Anil",
    age: 20,
    email: "anil@gmail.com",
    rahul: {
      id: 1,
      sonname: "Himanshu",
      sonemail: "hima@gmail.com",
    },
  };

  // Handle Props Side Effect with useEffect

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
    setData(data + 1);
  };

  // LiftinStateUp work practice Start
  const [addUser, setAddUser] = useState ()
  // LiftinStateUp work practice End
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Learn with <b>Anil Kumar sir </b> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      {/* <Header /> */}
      {/* <LoopJsx /> */}
      {/* <ArrayNestedLooping /> */}
      {/* <Props user={userobj} /> */}
      {/* <FruitList /> */}
      {/* <Toggle /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Setting /> */}
      {/* <GetInput /> */}
      {/* <FormControl /> */}
      {/* <CheckboxSkills /> */}
      {/* <HandleRadio /> */}
      {/* <UseOfuseEffectHook /> */}
      {/* <h1>{Userkey}</h1> */}
      
      {/* <HandlePropsSideEffect counter={counter} data={data} />
      <button onClick={increase}>Counter: {counter}</button>
      <button onClick={decrease}>Data: {data}</button> */}

      {/* Handle Props Side Effect with useEffect */}

      {/* <UseRefHook/> */}
      {/* <UncontrolledComponent/> */}

      {/* <PassFunction/> */}
      {/* <ForwardRef/> */}

      {/* <UseFormStatus/> */}

      {/* <UseTransitionHook/> */}

      {/* <DerivedState/> */}

      {/* <AddUser setAddUser = {setAddUser}/> */}
      {/* <DisplayUser addUser = {addUser}/> */}

      <UseIdHook/>

      {/* <UpdatingObjects/> */}

      {/* <UpdatingArray/> */}
    </>
  );
}

export default App;
