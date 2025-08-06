const noteModel = require('../models/note');

/**
 * NoteService provides business logic for managing notes.
 */
class NoteService {
  // PUBLIC_INTERFACE
  createNote({ title, content }) {
    return noteModel.createNote({ title, content });
  }

  // PUBLIC_INTERFACE
  getAllNotes() {
    return noteModel.getAllNotes();
  }

  // PUBLIC_INTERFACE
  getNoteById(id) {
    return noteModel.getNoteById(id);
  }

  // PUBLIC_INTERFACE
  updateNote(id, data) {
    return noteModel.updateNote(id, data);
  }

  // PUBLIC_INTERFACE
  deleteNote(id) {
    return noteModel.deleteNote(id);
  }
}

module.exports = new NoteService();
