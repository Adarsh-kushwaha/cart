import React, { useEffect, useState } from "react";
import Data from "./data";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const storeData = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  useEffect(() => {
    //check if data already exists
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      //for first time user
      const cartData = Data.map((item) => {
        return { ...item, qty: 1 };
      });
      setData(cartData);
      storeData(cartData);
    }
  }, []);

  const changeQty = (id, value) => {
    const changedData = data.map((p) => {
      if (p.id === id) {
        if (p.qty >= 0) {
          p.qty = p.qty + value;
        }
      }

      return p;
    });

    setData(changedData);
    storeData(changedData);
  };

  const removeItem = (id) => {
    const filterdData = data.filter((p) => p.id !== id);
    setData(filterdData);
    storeData(filterdData);
  };

  console.log(data);
  return (
    <div className="">
      <div></div>
    </div>
  );
}
