import { Fragment, useState } from "react";
import "./App.css";
import App1 from "./forLesson/react4_companents/App1";
import Modal from "./forLesson/react5_modal/Modal";
import EventList from "./forLesson/react6_comp/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [del, setDel] = useState(true);
  const [user, setUser] = useState([
    { name: "Husan", age: 14, id: 1 },
    { name: "Rustam", age: 15, id: 2 },
    { name: "Anvar", age: 20, id: 3 },
    { name: "Akmal", age: 15, id: 4 },
  ]);

  const handleDelete = (id) => {
    const filtered = user.filter((item) => {
      return item.id !== id;
    });
    setUser(filtered);
  };
  let subTitle = "Lorem ipsum dolor sit amet consectetur adipisicing.";

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        <App1 title="Hello guys I am Ahror" subTitle={subTitle} />
        <br />
        {del && <button onClick={() => setDel(false)}>Delete All Item</button>}
        {!del && <button onClick={() => setDel(true)}>Add All Item</button>}
        {del && <EventList user={user} handleDelete={handleDelete} />}
        {showModal && (
          <Modal closeModal={closeModal}>
            <h2>Hello guys I am Axihero</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Modal>
        )}
        <br />
        <br />
        <button onClick={() => setShowModal(true)}>open modal</button>
      </div>
    </>
  );
}
export default App;
