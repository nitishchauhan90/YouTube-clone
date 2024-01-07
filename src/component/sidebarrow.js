import React from 'react'
import "../sidebar.css"
function Sidebarrow({selected,Icon,title}) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
        <Icon className="siderow_icon"/>
        <h1 className='side-head'>{title}</h1>
    </div>
  )
}

export default Sidebarrow
