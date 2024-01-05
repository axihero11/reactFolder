import "./NewEventForm.css"

import React from 'react'
import { useState } from 'react';
function NewEventForm() {
    const [title,setTitle]= useState('')
    const [date,setDate]= useState('')

    const resetInput = ()=>{
         setTitle('')
        setDate('')
    }
  return (
    <div>
      <form className="new-event-form">
        <label>
            <span>Event title:</span>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" onChange={(e)=> setDate(e.target.value)} value={date}/>
        </label>
        <button type="button" onClick={resetInput}>reset btn</button><br />
        <button>submit</button>
      </form>
      <hr />
      <h3>Title:{title}</h3>
      <h3>Date:{date}</h3>
    </div>
  )
}

export default NewEventForm
