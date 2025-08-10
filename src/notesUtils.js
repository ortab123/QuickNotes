import { format } from "date-fns";

export function updateNoteInList(notes, selectedNote, updatedNote) {
  return notes.map((note) =>
    note === selectedNote
      ? {
          ...note,
          ...updatedNote,
          updatedAt: format(new Date(), "MMM do h:mm a"),
        }
      : note
  );
}

export function filterNotes(notes, searchQuery, selectedCategory) {
  return notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.text.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "" || note.category === selectedCategory)
  );
}
