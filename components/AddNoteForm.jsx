import { useState } from "react";
import "./AddNoteForm.css";
import { categories } from "../src/categories";

export default function AddNoteForm({
  onAddNote,
  initialTitle = "",
  initialText = "",
  initialCategory = "",
  isEditMode = false,
}) {
  const [noteTitle, setNoteTitle] = useState(initialTitle);
  const [noteText, setNoteText] = useState(initialText);
  const [noteCategory, setNoteCategory] = useState(initialCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === "") return;
    onAddNote(noteCategory, noteTitle, noteText);
    if (!isEditMode) {
      setNoteTitle("");
      setNoteText("");
    }
  };

  return (
    <form className="add-note" onSubmit={handleSubmit}>
      <div className="category-row">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={noteCategory}
          onChange={(e) => setNoteCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <input
        className="title-input"
        placeholder="Title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        className="input-txt"
        placeholder="Your note..."
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />
      <button type="submit" className="add-btn">
        {isEditMode ? "Update Note" : "Add"}
      </button>
    </form>
  );
}
