import { FaTimes } from "react-icons/fa";
import { categories } from "../src/categories";
import "./NoteCard.css";

export default function NoteCard({ note, onClick, onDelete }) {
  return (
    <div
      className={`note ${note.category}`}
      onClick={onClick}
      style={{ backgroundColor: categories[note.category] || "#fff" }}
    >
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <FaTimes />
      </button>
      <h3 className="note-category">{note.category}</h3>
      <h5 className="title">{note.title}</h5>
      <p>{note.text}</p>
      <small>Created: {note.createdAt}</small>
      {note.updatedAt && <small> Updated: {note.updatedAt}</small>}
    </div>
  );
}
