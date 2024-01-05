import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Trips.css";
function TripList() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const {data:trips,isPending} = useFetch(url)
 

  return (
    <div className="trip-list">
      {isPending && <div>Loading...</div>}
      <ul>
        {trips && trips.map((trip) => (
          <li key={trip.id}>
            <h2>{trip.name}</h2>
            <h2>{trip.username}</h2>
            <p>{trip.email}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          onClick={() =>
            setUrl("https://jsonplaceholder.typicode.com/users?username=Bret")
          }
        >
          UserName
        </button>
        <button
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
        >
          All UserName
        </button>
      </div>
    </div>
  );
}

export default TripList;
