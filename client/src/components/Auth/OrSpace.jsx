import React from 'react'

const OrSpace = ({text}) => {
  return (
    <div className="OrSpace flex-evenly">
        <div className="OrSpace-orone"></div>
        <div className="OrSpace-ortow">{text}</div>
        <div className="OrSpace-orthree"></div>
    </div>
  )
}

export default OrSpace