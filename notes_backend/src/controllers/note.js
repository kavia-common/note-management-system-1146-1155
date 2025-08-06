const noteService = require('../services/note');

/**
 * NotesController for handling note CRUD API endpoints.
 */
class NotesController {
  // PUBLIC_INTERFACE
  async create(req, res) {
    /**
     * Create a new note.
     * Request body: { title: string, content: string }
     */
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        return res.status(400).json({ status: 'error', message: 'Title and content are required.' });
      }
      const note = noteService.createNote({ title, content });
      return res.status(201).json(note);
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // PUBLIC_INTERFACE
  async getAll(req, res) {
    /**
     * Get all notes.
     */
    try {
      const notes = noteService.getAllNotes();
      return res.json(notes);
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // PUBLIC_INTERFACE
  async getById(req, res) {
    /**
     * Get one note by ID.
     */
    try {
      const { id } = req.params;
      const note = noteService.getNoteById(id);
      if (!note) return res.status(404).json({ status: 'error', message: 'Note not found.' });
      return res.json(note);
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // PUBLIC_INTERFACE
  async update(req, res) {
    /**
     * Update note by ID.
     * Request body: { title: string (optional), content: string (optional) }
     */
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      if (title === undefined && content === undefined) {
        return res.status(400).json({ status: 'error', message: 'At least title or content must be provided.' });
      }
      const note = noteService.updateNote(id, { title, content });
      if (!note) return res.status(404).json({ status: 'error', message: 'Note not found.' });
      return res.json(note);
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // PUBLIC_INTERFACE
  async delete(req, res) {
    /**
     * Delete note by ID.
     */
    try {
      const { id } = req.params;
      const deleted = noteService.deleteNote(id);
      if (!deleted) return res.status(404).json({ status: 'error', message: 'Note not found.' });
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }
}

module.exports = new NotesController();
