import { useState, useEffect } from "react";
import { format } from "date-fns";
import { categories } from "./categories.js";
import { updateNoteInList, filterNotes } from "./notesUtils.js";
import AddNoteForm from "../components/AddNoteForm.jsx";
import NoteCard from "../components/NoteCard.jsx";
import NoteModal from "../components/NoteModal.jsx";
import "./NotesApp.css";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (category, title, text) => {
    const newNote = {
      category,
      title,
      text,
      createdAt: format(new Date(), "MMM do h:mm a"),
      updatedAt: null,
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index) => {
    const confirmDelete = confirm("Are you sure you want to delete your note?");
    if (!confirmDelete) return;

    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleOpenModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = updateNoteInList(notes, selectedNote, updatedNote);
    setNotes(updatedNotes);
    handleCloseModal();
  };

  const filteredNotes = filterNotes(notes, searchQuery, selectedCategory);

  return (
    <div className="app">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="category-filters">
        <input
          type="radio"
          id="all"
          name="category"
          value=""
          checked={selectedCategory === ""}
          onChange={() => setSelectedCategory("")}
          className="category-radio"
        />
        <label htmlFor="all" className="category-label">
          All
        </label>

        {Object.keys(categories).map((cat) => (
          <span key={cat}>
            <input
              type="radio"
              id={cat}
              name="category"
              value={cat}
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
              className="category-radio"
            />
            <label
              htmlFor={cat}
              className="category-label"
              style={{ backgroundColor: categories[cat].color }}
            >
              {cat}
            </label>
          </span>
        ))}
      </div>

      <AddNoteForm onAddNote={handleAddNote} />
      <div className="notes-grid">
        {filteredNotes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            onClick={() => handleOpenModal(note)}
            onDelete={() => handleDeleteNote(index)}
          />
        ))}
      </div>
      {isModalOpen && selectedNote && (
        <NoteModal
          key={selectedNote.title + selectedNote.createdAt}
          note={selectedNote}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdateNote={handleUpdateNote}
        />
      )}
    </div>
  );
}
