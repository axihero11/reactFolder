// style
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/UserList/UserList";
import NewUser from "./components/NewUser/NewUser";

function App() {
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const deleteUser = (id) => {
    setUser((prev) => {
      return prev.filter((user) => user.id !== id);
    });
  };
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (event) => {
    setUser((prev) => {
      return [...prev, event];
    });
    setShowModal(false);
  };

  return (
    <div className="App" onClick={closeModal} onKeyDown={closeModal}>
      <Navbar userLength={user.length} />
      <main>
        <div className="no-users">{user.length === 0 && <h3>No Users</h3>}</div>
        <UserList user={user} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUser addUser={addUser} />}
      <button className="create-user" onClick={() => setShowModal(true)}>
        create user
      </button>
      <Footer />
    </div>
  );
}

export default App;
