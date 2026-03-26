import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([
    {
       title:"test title",
       description:"test description"
    },
    {
       title:"test title",
       description:"test description"
    },
    {
       title:"test title",
       description:"test description"
    },
    {
       title:"test title",
       description:"test description"
    },
])

axios.get("http://localhost:3000/api/notes")
.then((res) => {
  setNotes(res.data.note)
  
})

  return (
    <>
       <div className="notes">
         {
          notes.map((notes) => {
            return <div className="note">
          <h1>{notes.title}</h1>
          <p>{notes.description}</p>
        </div>
          })
         }
       </div>
    </>
  )
}

export default App
