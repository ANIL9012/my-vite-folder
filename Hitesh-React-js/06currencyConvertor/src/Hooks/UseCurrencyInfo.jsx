import React, { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=fca_live_vgIpAcQ3f4XgxI9U9TCsT1uU8Qx6qKAX2waRMKOB&currencies=${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        // API response: { data: { USD: { code: "USD", value: 1 } } }
        setData(res.data || {});
        console.log("Fetched Data:", res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);

  return data;
}

export default UseCurrencyInfo;
