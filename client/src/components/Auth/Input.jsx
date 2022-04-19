import React from 'react'

const Input = ({...inputProps}) => {
  return (
    <div>
        <input {...inputProps} />
    </div>
  )
}

export default Input