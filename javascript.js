var counter = 0
var note
var noteTextId
// var noteText

function addNote() {
  var newNote = document.createElement("div")
  document.body.appendChild(newNote)
  counter = counter + 1
  newNote.className = "note"
  newNote.id = "note-" + counter
  newNote.insertAdjacentHTML("beforeend", "<p id=''></p><div class='actions'><a id='edit' onclick='editNote(this)'>Edit</a><a id='delete' onclick='deleteNote(this)'>Delete</a></div>")
  noteTextId = newNote.querySelector("p").id = "note_text-" + counter
  clearField()
  showOptions()
  hideActions()
  setNote(newNote)
}

function clearField() {
  document.getElementById("note_content").innerHTML = ""
}

function showOptions() {
  document.getElementById("note_options").style.display = "block"
}


function setNote(newNote) {
  note = newNote.id
}

function noteColor(color) {
  document.getElementById(note).style.backgroundColor = color
}

function changeText() {
  var noteTextContainer = document.getElementById(noteTextId).id
  var noteText = document.getElementById("note_content").innerHTML
  document.getElementById(noteTextContainer).innerHTML = noteText
}

function submitNote() {
  document.getElementById("note_options").style.display = "none"
  showActions()
}

function hideActions() {
  var elements = document.getElementsByClassName("actions");
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}

function showActions() {
  var elements = document.getElementsByClassName("actions");
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = 'block';
  }
}

function editNote(element) {
  var thisElement = element 
  noteTextId = thisElement.parentNode.parentNode.querySelector("p").id 
  document.getElementById("note_content").innerHTML = document.getElementById(noteTextId).innerHTML
  document.getElementById("note_options").style.display = "block"
  hideActions()  
}

function deleteNote(element) {
  var thisElement = element 
  var thisId = thisElement.parentNode.parentNode.id 
  document.getElementById(thisId).remove()
}
