/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './List.css'

function List({taskHeading, taskParagraph, id}) {
  return (
    <div>
      <li className='listItem'>
        <div className="listHead">
            <h4>{taskHeading} id:{id}</h4>
        </div>
        <div className="listContent">
            <p>{taskParagraph}</p>
        </div>
      </li>
    </div>
  )
}

export default List
