import { useState } from "react";
import "./App.css";
import Item from "./Item";
import { data } from "./data";
import Modal from "./companents/Modal";
import {FaTelegramPlane} from "react-icons/fa"

function App() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("Ahror");
    const[modal,setModal] = useState(false)
    const users = data();

    // console.log(users.length);
    const deleteItem = (id) => {
        // console.log(id);
        // const filtered = users.filter((event1) => {
        //     return event1.id !== id;
        // });
        // setUsers(filtered);

        setUsers((prev) => {
            return prev.filter((event1) => {
                return event1.id !== id;
            });
        });
    };
    const changeName = () => {
        setName("amirxon");
    };

    return (
        <>
            <h1>My name is {name}</h1>
            <h1> <FaTelegramPlane/> </h1>
            <button onClick={changeName}>You can change my name</button>
            <div className="container">
                {/* <button onClick={()=> setModal(true)}>Open Modal</button>
                {show && <button onClick={() => setShow(false)}>Bor</button>}
                {!show && <button onClick={() => setShow(true)}>yuq</button>}
                {!show && (
                    <div className="item">
                        {users.length === 0 && <h1>No Users :(</h1>}
                        {users.map((item) => {
                            return (
                                <div className="box" key={item.id}>
                                    <Item name={name} />
                                    <h1>{item.name1}</h1>
                                    <p>
                                        {item.surename} - {item.age}
                                    </p>
                                    <button onClick={() => deleteItem(item.id)}>
                                        delete
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
                {modal && (<Modal setModal={setModal} isModeModal={true}/>)}
               */}
            </div>
        </>
    );
}

export default App;
