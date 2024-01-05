import { useState } from "react";
import "./App.css";

function App() {
  const [isTrue, setIsTrue] = useState(false);

  const closeModal = (e) => {
    if (e.target.className === "modal1") setIsTrue(false);
    
  };

  return (
    <div className="App">
      <h1>Hello Guys</h1>
      {isTrue && (
        <div className="container" onClick={(e) => closeModal(e)}>
          <div className="modal1">
            <div className="box">
              <h1>Hello I am Ahror</h1>
              <button>X</button>
            </div>
          </div>
        </div>
      )}

      {isTrue && <button onClick={() => setIsTrue(false)}>red</button>}
      {!isTrue && <button onClick={() => setIsTrue(true)}>blue</button>}
    </div>
  );
}

export default App;
