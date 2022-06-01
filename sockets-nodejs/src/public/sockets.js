const socket = io.connect();


const saveNote = (name, email, password,dob) => {
  socket.emit("client:newnote", {name, email,password,dob});
};

/**
 * delete a note based on an Id
 * @param {string} id a note ID
 */
const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

const updateNote= (id, name, email, password,dob) => {
  socket.emit("client:updatenote", {
    id,
    name,
    email,
    password,
    dob,
  });
};

socket.on("server:loadnotes", renderNotes);

socket.on("server:newnote", appendNote);

socket.on("server:selectednote", (note) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const dob = document.getElementById("dob");

  name.value = note.name;
  email.value = note.email;
  password.value = note.password;
  dob.value = note.dob;

  savedId = note.id;
});
