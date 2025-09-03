import React, { useEffect, useState } from 'react'

export default function UseOfuseEffectHook() {

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)


    function CounetFunction(){
        console.log("CounetFunction:", counter)
    }

    // useEffect(()=>{
    //   // Call every Time toh es tarah se karte he chahe koi state ho ya kuchh or 
    // })

    useEffect(()=>{
    CounetFunction()
      // Call only one Time  toh es tarah se
    }, [])

    // useEffect(()=>{
    //   // Call on Changing single State
    // }, [state])

    // useEffect(()=>{
    //   // Call on Changing both State
    // })

    // useEffect(()=>{
    //   // Call on changes props
    // },[prop1, props2])

  return (
    <>
      <h1>use of useEffect hook</h1>

      <button onClick={()=> setCounter(counter + 1)}>Counter: {counter}</button>
      <button onClick={()=> setData(data + 1)}>Data: {data}</button>
    </>
  )
}
