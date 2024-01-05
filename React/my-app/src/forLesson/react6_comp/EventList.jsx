import React from 'react'
import style from "../react7_inlineCss/EventList.module.css"
function EventList({user,handleDelete}) {
  console.log(user);
  return (
    <div>
      {user.length === 0 && <h2>no items :(</h2>}
            {user.map((item) => {
              return (
                <div className={style.card} key={item.id}>
                  <h1>
                    {item.title} 
                  </h1>
                  <p>{item.location} - {item.date}</p>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </div>
              );
            })}
    </div>
  )
}

export default EventList
