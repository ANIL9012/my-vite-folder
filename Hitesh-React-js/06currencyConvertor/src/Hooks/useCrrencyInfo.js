import React, { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=fca_live_vgIpAcQ3f4XgxI9U9TCsT1uU8Qx6qKAX2waRMKOB${currency}`
    )
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data)
  }, []);
  console.log(data)
  return data
}

export default UseCurrencyInfo;
