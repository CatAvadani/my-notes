"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useNotes } from "./contexts/NoteContext";

export default function Home() {
  const router = useRouter();
  const { addNote } = useNotes();
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");

  function handleTitleChange(e) {
    const text = e.target.value;
    setNewTitle(text);
  }

  function handleNoteChange(e) {
    const note = e.target.value;
    setNewNote(note);
  }

  function handleClick(e) {
    const note = { title: newTitle, text: newNote };
    addNote(note);
    router.push("/allNotes");
    e.preventDefault();
  }

  return (
    <div className=' flex flex-col items-center py-4 mt-9 space-y-5'>
      <h1 className='text-2xl md:text-3xl font-bold mb-10 mt-0'>MY NOTES</h1>
      <form
        action='submit'
        className='flex flex-col space-y-1 bg-black/5 rounded p-8 w-[90vw] md:p-10 md:px-16  md:w-full'
      >
        <label className=' font-semibold mb-2'>New Note</label>
        <input
          onChange={handleTitleChange}
          value={newTitle}
          type='text'
          placeholder='Enter title'
          className='
         p-4 rounded text-black focus:outline-none'
        />

        <textarea
          onChange={handleNoteChange}
          value={newNote}
          cols={50}
          rows={5}
          placeholder='Enter note'
          className=' p-4 rounded text-black focus:outline-none '
        ></textarea>
        <button
          onClick={handleClick}
          className=' p-4 bg-[#675c88] text-white font-semibold rounded hover:bg-[#53486b] transition-all hover:text-slate-300'
        >
          SAVE NOTE
        </button>
        <Link href={"/allNotes"}>
          <button className=' p-4 bg-[#675c88] text-white font-semibold rounded hover:bg-[#53486b] transition-all hover:text-slate-100 w-full'>
            VIEW MY NOTES
          </button>
        </Link>
      </form>
    </div>
  );
}
