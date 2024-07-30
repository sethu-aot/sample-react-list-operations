/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Button.css';

function Button({btnClass, fun, btnText}) {
  return (
    <div>
      <button className={btnClass} onClick={fun}>{btnText}</button>
    </div>
  )
}

export default Button
