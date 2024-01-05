import React, { useState } from "react";
import { HooksList } from "../Hooks/HooksList";

function TripList() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/user");
  const { data:item,isPending,isError } = HooksList(url);

  return (
    <div>
        {isPending && <div><h3>Loading..</h3></div>}
        {isError && <div><h3>{isError}</h3></div>}
      <div>
        {item && item.map((item) => {
          return (
            <div key={item.id} className="App">
              <p>{item.name}</p>
              <p>{item.username}</p>
            </div>
          );
        })}
        <div className="buttons">
          <button
            onClick={() =>
              setUrl("https://jsonplaceholder.typicode.com/users?username=Bret")
            }
          >
            Jomboy
          </button>
          <button
            onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
          >
            All person{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripList;
