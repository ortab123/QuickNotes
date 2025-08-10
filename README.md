# 📝 Notes App

A simple React project for managing notes, including creating, updating, deleting, and searching notes by categories.

---

## 📁 Project Structure

```
components/
  ├─ AddNoteForm.css
  ├─ AddNoteForm.jsx
  ├─ NoteCard.css
  ├─ NoteCard.jsx
  ├─ NoteModal.css
  └─ NoteModal.jsx
src/
  ├─ index.css
  ├─ main.jsx
  ├─ NotesApp.css
  ├─ NotesApp.jsx
  ├─ categories.js
  └─ notesUtils.js
```

### 🧩 components

- **AddNoteForm.jsx**  
  Component that renders a form for adding and editing notes with fields for title, text, and category.

- **NoteCard.jsx**  
  Component that displays a single note card in the UI, including a delete button.

- **NoteModal.jsx**  
  Modal component for editing an existing note, with the ability to toggle edit mode.

---

### src

- **main.jsx**  
  Entry point of the application, renders the main `NotesApp` component into the DOM.

- **NotesApp.jsx**  
  The main app component managing state, and handling logic for adding, deleting, updating, and searching notes.

- **categories.js**  
  An object containing the list of possible note categories, including colors associated with each category.

- **notesUtils.js**  
  Utility file containing pure reusable functions such as:
  - Updating the notes list after a note change
  - Filtering notes based on search query and category

---

## 🚀 Installation & Running

1. Install dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   Run the app in development mode:
   npm start
   ```

# or

yarn start
The app will automatically open in your browser at http://localhost:3000

## Technologies Used

-React 18
-CSS Modules
-date-fns (for date formatting)
-React Modal
-React Icons

Notes
Data is saved to and loaded from the browser's localStorage.

You can add, delete, and update notes as well as assign categories.

Notes can be filtered and searched by text and category.
