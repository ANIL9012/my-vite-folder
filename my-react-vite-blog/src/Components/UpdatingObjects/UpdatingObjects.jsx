import React, { useState } from 'react'

function UpdatingObjects() {

    const [data, setData] = useState({
        name: "Anil",
        Address:{
            city: "Delhi",
            country: "India"
        }
    })

    const handleName = (val) =>{
        data.name=val
        setData({...data})
    }

    const handleCity = (city) =>{
        data.Address.city = city
        setData({...data,Address:{...data.Address,city}})
    }

    const handleCountry = (country) =>{
        data.Address.country = country
        setData({...data,Address:{...data.Address,country}})
    }


  return (
    <>
      <h1>Updating objects in State</h1>

      <input type="text" placeholder='Enter Name' onChange={(e) => handleName(e.target.value)} />
      <input type="text" placeholder='Enter City' onChange={(e) => handleCity(e.target.value)} />
      <input type="text" placeholder='Enter Country' onChange={(e) => handleCountry(e.target.value)} />


      <h2>Name:{data.name}</h2>
      <h2>City:{data.Address.city}</h2>
      <h2>Country:{data.Address.country}</h2>
    </>
  )
}

export default UpdatingObjects
