import React from 'react'
import { HooksList } from '../Hooks/HooksList'

function TopSection() {
    const {data:item,loading} = HooksList()
  return (
    <div>
      <div className="item">
        {loading && <div>Loading...!</div>}
        {item && item.map((item) => {
            return(
                <div className="box">
                    <h2>{item.id}</h2>
                    <h2>{item.id}</h2>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default TopSection
