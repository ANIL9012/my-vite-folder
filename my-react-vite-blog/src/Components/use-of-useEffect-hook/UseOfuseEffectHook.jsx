import React, { useEffect, useState } from 'react'

export default function UseOfuseEffectHook() {

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)


    function CounetFunction(){
        console.log("CounetFunction:", counter)
    }

    useEffect(()=>{
    CounetFunction()
    }, [])

  return (
    <>
      <h1>use of useEffect hook</h1>

      <button onClick={()=> setCounter(counter + 1)}>Counter: {counter}</button>
      <button onClick={()=> setData(data + 1)}>Data: {data}</button>
    </>
  )
}
