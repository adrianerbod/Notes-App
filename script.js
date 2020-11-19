displayNotes();

//create the note and add to LS
function addToStorage () {
    let noteTitle = document.getElementById("title").value;
    let noteText = document.getElementById("note-text").value;
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes == null) {
        notesObject = [];
    } else {
        notesObject = JSON.parse(storedNotes);
    }

    
    if (noteTitle == "" || noteText == "") {
        alert("bug");
    } else {
        completeNote = [];
        completeNote.push(noteTitle, noteText);
        notesObject.unshift(completeNote);
        localStorage.setItem("notes", JSON.stringify(notesObject));
    }

    let form = document.querySelector(".create_form");
    form.reset();
    displayNotes();
};
        //Display Notes
function displayNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes == null) {
        notesObject = [];
    } else {
        notesObject = JSON.parse(storedNotes);
    }

    let temp = "";
    notesObject.forEach((element, index) => {
        temp += `<div class="note_output">
                    <h2 class="note_title">${element[0]}</h2>
                    <p class="note_desc">${element[1]}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="delete-btn">Delete Note</button>
                </div>`;
    });

    const noteElement = document.querySelector(".output_area");
    if (noteElement !== 0) {
        noteElement.innerHTML = temp;
    } else {
        console.log("nothing to show");
    }
};

        //Delete Note
function deleteNote (index) {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes == null) {
        notesObject = [];
    } else {
        notesObject = JSON.parse(storedNotes);
    }
    notesObject.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObject));
    displayNotes();
};

        //Search
const search = document.getElementById("search-note");
search.addEventListener("input", () => {
    let searchValue = search.value.toLowerCase();
    let noteOutput = document.querySelectorAll(".note_output");
    noteOutput.forEach(element => {
        let noteText = element.getElementsByTagName("h2")[0].innerText;

        if (noteText.includes(searchValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

const createNoteBtn = document.getElementById("create-btn").addEventListener("click", addToStorage);