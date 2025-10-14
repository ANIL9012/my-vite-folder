import { Suspense, lazy, useState } from "react";
import "./App.css";

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
import ContextData from "./Components/ContextAPI/ContextData";
import { SubjectContext } from "./Components/ContextAPI/ContextAPI";
import UseToggle from "./Components/CustomHook/CustomHook";
import ValidationInput from "./validation on input/validationInput";
import ValidationuseActionState from "./Components/validation with useActionState/ValidationuseActionState";
import UseReducerhook from "./Components/useReducerhook/UseReducerhook";
import CallRestAPI from "./Components/Call Rest API/CallRestAPI.jsx";
import RGBColorMixer from "./Components/RGB Color Mixer/RGBColorMixer.jsx";
import Clock from "./Components/ClockTimer/Clock.jsx";
import MultipleConditions from "./Components/Multiple Conditions or Else If/MultipleConditions.jsx";
import ToggleComponentorShowHide from "./Components/ToggleComponentorShowHideusingState/ToggleComponentorShowHide.jsx";

const Userlazy = lazy(() =>
  import("../src/Components/Lazy Loading/LazyLoading.jsx")
);

{
  /* Call Rest API Start */
}

// const fetchData = () =>
//   fetch("https://dummyjson.com/users").then((response) => response.json());

// const userResource = fetchData();
{
  /* Call Rest API End */
}

function App() {
  // const [count, setCount] = useState(0);

  // let userobj = {
  //   name: "Anil",
  //   age: 20,
  //   email: "anil@gmail.com",
  //   rahul: {
  //     id: 1,
  //     sonname: "Himanshu",
  //     sonemail: "hima@gmail.com",
  //   },
  // };

  // Handle Props Side Effect with useEffect

  // const [counter, setCounter] = useState(0);
  // const [data, setData] = useState(0);

  // const increase = () => {
  //   setCounter(counter + 1);
  //   setData(Math.max(0, data - 1));
  // };

  // const decrease = () => {
  //     setData(data + 1);
  //     setCounter(Math.max(0, counter - 1));
  // };

  // LiftinStateUp work practice Start
  // const [addUser, setAddUser] = useState();
  // LiftinStateUp work practice End
  {
    /* Context API */
  }

  const [subject, setSubject] = useState("");

  // CustomHook
  // const [value, togglevalue] = UseToggle(true);
  // console.log("Val------", value);

  {
    /* Lazy Loading Start*/
  }

  // const [load, setLoad] = useState(false);

  {
    /* Lazy Loading End*/
  }

  return (
    <>
      {/* <Header /> */}
      {/* <LoopJsx /> */}
      {/* <Clock/> */}
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
      {/* <MultipleConditions /> */}
      {/* <UseOfuseEffectHook /> */}
      <ToggleComponentorShowHide />
      {/* <h1>{Userkey}</h1> */}

      {/* <HandlePropsSideEffect counter={counter} data={data} /> */}
      {/* <button onClick={increase}>Counter: {counter}</button>
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

      {/* <UseIdHook/> */}

      {/* <UpdatingObjects/> */}

      {/* <UpdatingArray/> */}

      {/* Context API */}

      {/* <div style={{ backgroundColor: "yellow", padding: "15px" }}>
        <SubjectContext.Provider value={subject}>
          <select defaultValue={subject} onChange={(e)=> setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="English">English</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">JavaScript</option>
            <option value="React js">React.JS</option>
          </select>
          <h1>Context Api</h1>
          <button onClick={()=> setSubject("")}>Clear Subject</button>
          <ContextData />
        </SubjectContext.Provider>
      </div> */}

      {/* CustomHook */}
      {/* <div>
        <button onClick={togglevalue}>Toggle Heading</button>
        <button onClick={()=> togglevalue(false)}>Hide Heading</button>
        <button onClick={()=> togglevalue(true)}>Show Heading</button>
        {value ? <h1>Custom Hook in React js</h1> : null}
      </div> */}

      {/* Normal Validation  */}
      {/* <ValidationInput/>  */}

      {/* validation with useActionState */}
      {/* <ValidationuseActionState/> */}

      {/* useReducerhook */}

      {/* <UseReducerhook/> */}

      {/* Lazy Loading Start*/}
      {/* <div>

        <h1>User Lazy user  loading</h1>
        {
        load ? <Suspense fallback={<h3>Loading.....</h3>}><Userlazy/></Suspense> : null
        }
        <button onClick={()=> setLoad(true)}>Load user</button>
      </div> */}
      {/* Lazy Loading End*/}

      {/* Call Rest API Start */}

      {/* <div>
        <Suspense fallback={<p>Call Rest API Loading</p>}>
          <CallRestAPI userResource={userResource} />
        </Suspense>
      </div> */}
      {/* Call Rest API End */}

      {/* RGB Color Mixer Start */}
      {/* <RGBColorMixer/> */}
      {/* RGB Color Mixer End */}
    </>
  );
}

export default App;
