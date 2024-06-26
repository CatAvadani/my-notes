'use client'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface Note {
  title: string
  text: string
}

interface NoteContextValue {
  notes: Note[]
  addNote: (note: Note) => void
  removeNote: (note: Note) => void
}

const NoteContext = createContext({} as NoteContextValue)

// This function is missing return type
// Example: function NotesProvider(props: PropsWithChildren): void

function NotesProvider(props: PropsWithChildren) {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes, isLoaded])

  const addNote = (note: Note) => {
    // Unnecessary console log - should be removed
    console.log(notes)
    setNotes([...notes, note])
  }

  // Duplicated code, unused code - should be removed
  const createNote = (note: Note) => {
    setNotes([...notes, note])
  }

  const removeNote = (note: Note) => {
    console.log('i was clicked')
    const updatedNotes = notes.filter((item) => item.title !== note.title)
    setNotes(updatedNotes)
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  )
}

export const useNotes = () => useContext(NoteContext)
export default NotesProvider
