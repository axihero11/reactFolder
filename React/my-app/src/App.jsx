import React, { useState } from "react";
import "./App.css";
import App1 from "./forLesson/react4_companents/App1";
import Modal from "./forLesson/react11_useRef/Modal";
import EventList from "./forLesson/react6_comp/EventList";

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([]);

  const newEvent = (event) => {
    setUser((prev) => {
      return [...prev, event];
    });
  };

  const handleDelete = (id) => {
    const filtered = user.filter((item) => {
      return item.id !== id;
    });
    setUser(filtered);
  };
  const closeModal = () => {
    setModal(false);
  };

  let title = "Hello guys I am Ahror";
  let subTitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  return (
    <>
      <div className="container">
        <App1 title={title} subTitle={subTitle} name="Hasan" />
        {modal && (
          <Modal
            closeModal={closeModal}
            isModeModal={false}
            newEvent={newEvent}
          />
        )}
        <button onClick={() => setModal(true)}>open</button>
        <EventList handleDelete={handleDelete} user={user} />
      </div>
    </>
  );
}
export default App;
