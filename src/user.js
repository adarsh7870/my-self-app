import React from "react";
import { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const url = `https://dummyjson.com/users?limit=5&skip=${skip}`;
  const options = {
    method: "GET",
  };

  const handlePrev = async () => {
    setSkip((prev) => prev - 5);
  };

  const handleNext = async () => {
    setSkip((prev) => prev + 5);
  };

  const FetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, [skip]);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>User Information</h1>
      <center>
        {data.map((dataObj, index) => (
          <div
            style={{
              width: "15em",
              backgroundColor: "#35D841",

              borderRadius: 10,
              marginBlock: 10,
            }}
            key={index}
          >
            <p style={{ fontSize: 20, color: "white" }}>
              First Name: {dataObj.firstName}
            </p>
            <p style={{ fontSize: 20, color: "white" }}>
              UserName: {dataObj.username}
            </p>
            <p style={{ fontSize: 20, color: "white" }}>
              Email-ID: {dataObj.email}
            </p>
          </div>
        ))}
      </center>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handlePrev}
        disabled={skip === 0}
        style={{ float: "left" }}
      >
        Prev
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleNext}
        disabled={skip === 95}
        style={{ float: "right" }}
      >
        Next
      </button>
    </div>
  );
}

export default User;
