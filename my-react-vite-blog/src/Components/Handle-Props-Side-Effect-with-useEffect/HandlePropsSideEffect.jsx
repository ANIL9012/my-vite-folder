import { useEffect } from "react";

function HandlePropsSideEffect({counter, data}) {
 
  function handlecounter() {
    console.log("Handle Counter");
  }

  useEffect(() => {
    handlecounter();
    // Yadi useEffect kisi function ko ek barr chalana ho tab
  }, []);

  function handkeData(){
    console.log("Handle Data")
  }

  useEffect(()=>{
    handkeData()
    // Yadi useEffect kisi ek function par chalana ho tab or us function ko baar baar call karana ya console.log karana ho tab
  }, [data])

//   useEffect(()=>{
//     console.log("Handle Counter");
//     console.log("Handle Data")
//     // Yadi useEffect kisi multiple  function par chalana ho tab or us function ko baar baar call karana ya console.log karana ho tab
//   }, [counter, data])

  return (
    <>
      <h1>Handle Props Side Effect with useEffect</h1>
      <h2>Data Value: {data}</h2>
      <h3>Counter Value: {counter}</h3>
    </>
  );
}

export default HandlePropsSideEffect;
