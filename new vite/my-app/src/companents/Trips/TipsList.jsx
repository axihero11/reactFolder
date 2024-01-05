import React, { useState } from 'react'
import { HooksList } from '../Hooks/HooksList'

function TipsList() {
    const [url,setUrl] = useState('https://jsonplaceholder.typicode.com/users')
    const {data:item,loading} = HooksList(url)
  return (
    <div>
      <div className="item">
        {loading && <div>Loading...!</div>}
        {item && item.map((item) => {
            return(
                <div className="box">
                    <h2>{item.id}</h2>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default TipsList
