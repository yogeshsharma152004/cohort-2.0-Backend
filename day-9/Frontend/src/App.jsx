import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const App = () => {

  const [notes, setNotes] = useState([])


  function fetchNotes(){
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.note);
    });
  }

  useEffect(() => {
     fetchNotes()
  },[])

  function submitHandler(e){
     e.preventDefault()

     const {title , description} = e.target.elements;
     console.log(title.value, description.value);
     

     axios.post("http://localhost:3000/api/notes" ,{
         title:title.value,
         description:description.value
        
     })
     .then((res) => {
      fetchNotes()
     })
  }

  function deleteNoteHandler(noteId){
 
 

    axios.delete("http://localhost:3000/api/notes/" + noteId)
    .then(() => {
      fetchNotes()
    })

  }

  function updateNoteHandler(noteId){
    const updateTitle  = prompt("Update Title")

    if(updateTitle){
      axios.patch("http://localhost:3000/api/notes/" + noteId , {
        title:updateTitle
      })
      .then(() => {
        fetchNotes()
      })
    }
  }
  

  return (
    <>
      <form className="note-creation-form"  onSubmit={submitHandler}>
        <input type="text" name='title' placeholder='Enter Title' />
        <input type="text" name='description' placeholder='Enter Description' />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {notes.map((notes , idx) => {
          return (
            <div key={idx} className="note">
              <h1>{notes.title}</h1>
              <p>{notes.description}</p>

              <button onClick={()=>{
                deleteNoteHandler(notes._id)
              }}>Delete</button>

               <button onClick={() => {
                updateNoteHandler(notes._id)
               }}>Update</button>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
