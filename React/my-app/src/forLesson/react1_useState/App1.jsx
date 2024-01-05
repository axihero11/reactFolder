import React, { useState } from "react";

function App1() {
  const [name, setName] = useState("Ahror");
  const [events, setEvents] = useState([
    { title: "ahror's brithday party", id: 1 },
    { title: "maruf's live stream", id: 2 },
    { title: "match: manchester vs Marselona", id: 3 },
  ]);
  const changeName = () => {
    setName("Abror");
  };
  return (
    <div>
      <div>
        <h1>Hello my name is {name}</h1>
        <button onClick={changeName}>clickMe</button>
        {events.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App1;
