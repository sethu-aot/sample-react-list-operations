/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Button from '../components/button/Button'
import List from '../components/list/List'

function Index() {

  useEffect(() => {
    sortAlpha();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function sortAlpha() {
    const alphaSorted = [...data].sort((a,b) => a.title.localeCompare(b.title))
    setdata(alphaSorted)
  }

  const [ data, setdata ] = useState([
    {
      key: 101,
      title: 'Finish React Project',
      description: 'Complete the React project for the client and submit it by the end of the week.'
    },
    {
      key: 102,
      title: 'Grocery Shopping',
      description: 'Buy groceries for the week, including fruits, vegetables, and dairy products.'
    },
    {
      key: 103,
      title: 'Workout Routine',
      description: 'Follow the workout routine: 30 minutes of cardio, strength training, and stretching exercises.'
    },
    {
      key: 104,
      title: 'Read "The Catcher in the Rye"',
      description: 'Read the first 50 pages of "The Catcher in the Rye" and summarize key points.'
    },
    {
      key: 105,
      title: 'Plan Weekend Trip',
      description: 'Plan a weekend trip itinerary, including places to visit, accommodation, and activities.'
    },
    {
      key: 106,
      title: 'Update Resume',
      description: 'Update the resume with recent job experiences and skills, and proofread for errors.'
    },
    {
      key: 107,
      title: 'Schedule Doctor’s Appointment',
      description: 'Call the doctor’s office to schedule a routine check-up appointment for next month.'
    },
    {
      key: 108,
      title: 'Organize Home Office',
      description: 'Declutter and organize the home office space, including filing important documents and setting up a comfortable workspace.'
    }
  ])

  function sortAsc() {
    const sortedAsc = [...data].sort((a,b) => a.key - b.key)
    setdata(sortedAsc)
  }

  function sortDesc() {
    const sortedDesc = [...data].sort((a,b) => b.key - a.key)
    setdata(sortedDesc)

  }

  return (
    <div>
      <div className="btnContainer">
      <Button btnClass='btn' btnText='sort ascending by id' fun={sortAsc} />
      <Button btnClass='btn' btnText='sort descending bt id' fun={sortDesc} />
      </div>

      <ul className="listContainer">
        {
          data.map(task => (
            // eslint-disable-next-line react/jsx-key
            <List taskHeading={task.title} taskParagraph={task.description} id={task.key}/>

          ))
        }
      </ul>
    </div>
  )
}

export default Index
