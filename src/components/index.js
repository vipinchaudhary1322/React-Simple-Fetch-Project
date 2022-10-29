import React, { useEffect, useState } from "react";
import "./index.css";

const Index = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://api.twelvedata.com/time_series?symbol=EUR/USD&interval=1week&outputsize=12&apikey=demo&source=docs"
    );
    const data = await response.json();
    console.log(data.values);
    setData(data.values);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Get the data from api</h1>
      <div className="container">
        <table className="table-content">
          <thead>
            <th>datetime</th>
            <th>open</th>
            <th>high</th>
            <th>low</th>
            <th>close</th>
          </thead>
          <tbody>
            {data.map((curEle, ind) => {
              return (
                <tr key={ind}>
            
                  <td>{curEle.datetime}</td>
                  <td>{curEle.open}</td>
                  <td>{curEle.high}</td>
                  <td>{curEle.low}</td>
                  <td>{curEle.close}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
