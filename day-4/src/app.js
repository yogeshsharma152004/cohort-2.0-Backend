// -create the server and confige server here

const express = require("express")

const app = express()

app.use(express.json())

const notes = []

/* post mthod => /noets api */

app.post('/notes' , (req,res) => {
   console.log(req.body);
    notes.push(req.body)

    console.log(notes);
    
   res.send("Note created")
    
})

/* get mthod => /noets api */

app.get('/notes' , (req,res) => {
    res.send(notes)
})

/* delet mthod => /noets api */
//request.params use 
//delete/notes/2 => index of notes that user want to delete

app.delete('/notes/:index' , (req,res) => {
   delete notes[req.params.index]
   
   res.send("note deleted suceesfully")
})

/*Patch method  api=>/notes/:index*/
/*req.body => {description :- "modified description"} */

app.patch('/notes/:index' ,(req,res) => {
  
    notes[req.params.index].description = req.body.description

    res.send("note updated sucessfully")
})

app.get('/' , (req,res) => {
    res.send("hello world")
})


module.exports = app