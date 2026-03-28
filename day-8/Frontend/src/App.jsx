import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([])
  

  function fetNotes(){
       axios.get("http://localhost:3000/api/notes").then((res) => {
         setNotes(res.data.note);
       });
  }
 
    
 useEffect(() => {
     fetNotes()
 } , [])

 function submitHandler (e) {
   e.preventDefault()

   const {title , description} = e.target.elements;

   console.log(title.value, description.value);

    axios.post("http://localhost:3000/api/notes" , {
      title:title.value,
      description:description.value
    })
    .then((res) => {
      console.log(res.data);

      fetNotes()
      
    })
  
   
 }

function HandleDeleteNote(noteId){
  console.log(noteId);

  axios.delete("http://localhost:3000/api/notes/" + noteId)
  .then(res => {
    console.log(res.data);
    fetNotes()
    
  })
  
}

function updateDescription(noteId){
   console.log(noteId);

   const updateDescription = prompt("Update Description")

   if(updateDescription){
     axios.patch("http://localhost:3000/api/notes/" + noteId, {
         description: updateDescription,
       })
       .then((res) => {
         fetNotes();
       });
   }  
}

  return (
    <>
      <form className="note-creation-form"  onSubmit={submitHandler}>
        <input type="text" name="title" placeholder='Enter Title' />
        <input type="text" name='description' placeholder='Enter Description' />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>


            

              <button onClick={() => {
                HandleDeleteNote(note._id)
              }}>Delete</button>

              <button onClick={() => {
                updateDescription(note._id)
              }}>Update</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
