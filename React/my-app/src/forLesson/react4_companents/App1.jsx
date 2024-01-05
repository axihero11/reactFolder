import React from 'react'

function App1({title,subTitle,name}) {

  return (
    <div>
      <h1 className='title'>{title}</h1>
      <br />
      <p className='subtitle'>{subTitle}</p>
      <h3>{name}</h3>
    </div>
  )
}

export default App1
