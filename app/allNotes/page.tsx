"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useNotes } from "../contexts/NoteContext";

export default function AllNotes() {
  const { notes } = useNotes();

  return (
    <div className=' flex flex-col mt-24  text-gray-700 justify-center items-center'>
      <h1 className='text-2xl md:text-3xl font-bold mb-10 mt-0'>YOUR NOTES</h1>
      <div className='flex flex-1 w-full'>
        <Link href={"/"}>
          <button
            className='py-2 px-6 mb-5 rounded-full
         bg-[#675c88] text-white font-semibold hover:bg-[#53486b] transition-all hover:text-slate-300'
          >
            ADD NOTE
          </button>
        </Link>
      </div>
      <div className='flex flex-col w-[90vw] md:w-[50vw] space-y-3'>
        {notes.map((note) => (
          <div
            key={note.title}
            className=' bg-gray-50 border p-4 rounded shadow-md'
          >
            <div className='flex justify-between'>
              <h1 className=' font-semibold mb-2 capitalize'>{note.title}</h1>
              <XMarkIcon className='h-6 w-6 text-red-700' />
            </div>
            <hr />
            <p className='mt-4'>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
