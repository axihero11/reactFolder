import "./NewEventForm.css";
import { v4 as uuidv4 } from "uuid";
import React, { useRef } from "react";
import { useState } from "react";

function NewEventForm({ newEvent }) {
const title = useRef('')
const date = useRef('')
const form = useRef()
const location = useRef('samarqand')

  const resetInput = () => {
    form.current.reset()
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      location:location.current.value,
      date: date.current.value,
      id: uuidv4(),
    };
    resetInput();
    newEvent(event);
  };
  return (
    <div>
      <form ref={form} className="new-event-form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Event title:</span>
          <input
            type="text"
            ref={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
             ref={date}
          />
        </label>
        <label>
          <span>Location</span>
          <select ref={location}>
            <option value="samarqand">Samarqand</option>
            <option value="toshkent">Toshkent</option>
            <option value="andijon">Andijon</option>
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}

export default NewEventForm;
