import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  const incuremet = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if(count  >=1 ){
      setCount(count - 1)
    }

  }
  return (
    <>
      <div className="contanier my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h1>Counter App</h1>
            <div className="my-5">
              <h2 className="my-5">{count}</h2>
              <button className="btn btn-secces mx-3" onClick={incuremet}>incuremet</button>
              <button className="btn btn-danger mx-3" onClick={decrement}>curemet</button>
              <button className="btn btn-secondry mx-3"onClick={() => setCount(0)}>reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
