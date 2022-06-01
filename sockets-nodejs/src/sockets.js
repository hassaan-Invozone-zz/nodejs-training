import { v4 as uuid } from "uuid";

let notes = [];

export default (io) => {
  io.on("connection", (socket) => {
    console.log("new socket connected:", socket.id);

    // Send all messages to the client
    socket.emit("server:loadnotes", notes);

    socket.on("client:newnote", (newNote) => {
      const note = { ...newNote, id: uuid() };
      notes.push(note);
      io.emit("server:newnote", note);
    });

    socket.on("client:deletenote", (noteId) => {
      notes = notes.filter((note) => note.id !== noteId);
      io.emit("server:loadnotes", notes);
    });

    socket.on("client:getnote", (noteId) => {
      const note = notes.find((note) => note.id === noteId);
      socket.emit("server:selectednote", note);
    });

    socket.on("client:updatenote", (updatedNote) => {
      notes = notes.map((note) => {
        if (note.id === updatedNote.id) {
          note.name = updatedNote.name;
          note.email = updatedNote.email;
          note.password = updatedNote.password;
          note.dob = updatedNote.dob;
        }
        return note;
      });
      io.emit("server:loadnotes", notes);
    });

    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });

  });
};
