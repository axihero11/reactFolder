import React from 'react'
import "./results.css"

function ResultsTop({active,setActive}) {
  const removeItem = () => {
    setActive(false)
  }
  return (
    <div>
      <div className="resultstop_container" style={{ display: active ? "block" : "none" }}>
        <div className="resultstop_item">
            <div className="resultstop_box" onClick={removeItem}>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsTop
