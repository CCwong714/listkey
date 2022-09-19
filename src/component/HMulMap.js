import React from "react";

function HMulMap() {
  const users = {
    data: [
      {
        id: 0,
        name: "Sam",
        details: [
          { info: "8888" },
          { info: "sam@gmail.com" },
          { info: "noida" },
        ],
      },
      {
        id: 2,
        name: "John",
        details: [
          { info: "7777" },
          { info: "John@gmail.com" },
          { info: "delhi" },
        ],
      },
      {
        id: 3,
        name: "Peter",
        details: [
          { info: "6666" },
          { info: "Peter@gmail.com" },
          { info: "gurugrum" },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Handle Nested Object React</h1>
      {users.data.map((item) => (
        <div key={users.id}>
          <div>{item.name}</div>
          <ul>
            {item.details.map((sub) => (
              <li key={users.id}>{sub.info}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HMulMap;
