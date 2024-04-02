'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useNotes } from './contexts/NoteContext';

export default function Home() {
  const router = useRouter();
  const { addNote } = useNotes();
  const [newTitle, setNewTitle] = useState('');
  const [newNote, setNewNote] = useState('');

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
    router.push('/allNotes');
    e.preventDefault();
  }

  return (
    <div className=' mt-9 flex flex-col items-center space-y-5 py-4'>
      <h1 className='mb-10 mt-0 text-2xl font-bold md:text-3xl'>MY NOTES</h1>
      <form
        action='submit'
        className='flex w-[90vw] flex-col space-y-1 rounded bg-black/5 p-8 md:w-full md:p-10  md:px-16'
      >
        <label className=' mb-2 font-semibold'>New Note</label>
        <input
          onChange={handleTitleChange}
          value={newTitle}
          type='text'
          placeholder='Enter title'
          className='
         rounded p-4 text-black focus:outline-none'
        />

        <textarea
          onChange={handleNoteChange}
          value={newNote}
          cols={50}
          rows={5}
          placeholder='Enter note'
          className=' rounded p-4 text-black focus:outline-none '
        ></textarea>
        <button
          onClick={handleClick}
          className=' rounded bg-[#675c88] p-4 font-semibold text-white transition-all hover:bg-[#53486b] hover:text-slate-300'
        >
          SAVE NOTE
        </button>
        <Link href={'/allNotes'}>
          <button className=' w-full rounded bg-[#675c88] p-4 font-semibold text-white transition-all hover:bg-[#53486b] hover:text-slate-100'>
            VIEW MY NOTES
          </button>
        </Link>
      </form>
    </div>
  );
}
