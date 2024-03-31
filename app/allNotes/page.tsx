"use client";
import { useNotes } from "../contexts/NoteContext";

export default function AllNotes() {
  const { notes } = useNotes();
  return (
    <div className=' flex flex-col mt-24 w-[80vw] h-[50vh] bg-slate-100 text-black'>
      <h1>My Notes</h1>

      {notes.map((note) => (
        <div key={note.title}>
          <h1>{note.title}</h1>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
}
