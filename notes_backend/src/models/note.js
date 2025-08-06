const { v4: uuidv4 } = require('uuid');

/**
 * Simple in-memory Note "model".
 * Would be replaced by a DB/state solution in production.
 */
class NoteModel {
  constructor() {
    /** @type {Array<{id: string, title: string, content: string, createdAt: string, updatedAt: string}>} */
    this.notes = [];
  }

  // PUBLIC_INTERFACE
  createNote({ title, content }) {
    /** Create a new note object */
    const newNote = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.notes.push(newNote);
    return newNote;
  }

  // PUBLIC_INTERFACE
  getAllNotes() {
    /** Retrieve all notes */
    return this.notes;
  }

  // PUBLIC_INTERFACE
  getNoteById(id) {
    /** Retrieve a note by its id */
    return this.notes.find((note) => note.id === id);
  }

  // PUBLIC_INTERFACE
  updateNote(id, { title, content }) {
    /** Update title and content of the note with given id */
    const note = this.notes.find((note) => note.id === id);
    if (!note) return null;
    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    note.updatedAt = new Date().toISOString();
    return note;
  }

  // PUBLIC_INTERFACE
  deleteNote(id) {
    /** Delete note by id */
    const idx = this.notes.findIndex((note) => note.id === id);
    if (idx === -1) return false;
    this.notes.splice(idx, 1);
    return true;
  }
}

module.exports = new NoteModel();
