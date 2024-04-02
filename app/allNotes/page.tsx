'use client'

import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'
import ConfirmationAlert from '../components/ConfirmationAlert'
import { Note, useNotes } from '../contexts/NoteContext'

export default function AllNotes() {
  const { notes, removeNote } = useNotes()

  // unused variables
  let newTitle,
    setNewTitle = useState('')
  const [showAlert, setShowAlert] = useState(false)
  // Not being consistent with names - breaking the naming convention
  const [noteToRemove, SetNoteToRemove] = useState<Note | null>(null)

  const handleShowAlert = (note: Note) => {
    SetNoteToRemove(note)
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const handleRemoveNote = () => {
    console.log('Remove note')
    if (noteToRemove) {
      removeNote(noteToRemove) // Remove the selected note
      setShowAlert(false)
    }
  }

  return (
    <div className=" flex flex-col mt-24  text-gray-700 justify-center items-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 mt-0">MY NOTES</h1>
      <div className="flex flex-1 w-full">
        <Link href={'/'}>
          <button
            className="py-2 px-6 mb-5 rounded-full
         bg-[#675c88] text-white font-semibold hover:bg-[#53486b] transition-all hover:text-slate-300"
          >
            ADD NOTE
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-[90vw] md:w-[50vw] space-y-3">
        {notes.map((note) => (
          <div
            key={note.title}
            className=" bg-gray-50 border p-4 rounded shadow-md"
          >
            <div className="flex justify-between">
              <h1 className=" font-semibold mb-2 capitalize">{note.title}</h1>
              <div className="flex justify-center gap-2">
                <PencilSquareIcon className=" size-5 text-gray-600 cursor-pointer hover:scale-125 transition-all" />
                <XMarkIcon
                  // onClick={() => removeNote(note)}
                  onClick={() => handleShowAlert(note)}
                  className=" size-6 text-red-700 cursor-pointer hover:scale-125 transition-all"
                />
                {showAlert && (
                  <ConfirmationAlert
                    message="Are you sure you want to remove this note?"
                    onClose={handleCloseAlert}
                    onRemove={handleRemoveNote}
                  />
                )}
              </div>
            </div>
            <hr />
            <p className="mt-4">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
