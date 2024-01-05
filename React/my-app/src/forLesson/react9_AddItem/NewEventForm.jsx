import "./NewEventForm.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState } from "react";


function NewEventForm({newEvent}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetInput = () => {
    setTitle("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: uuidv4(),
    };
    resetInput();
    newEvent(event);
  };
  return (
    <div>
      <form className="new-event-form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Event title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}

export default NewEventForm;
