'use client'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface Note {
  // Repeating the same name as the interface when naming the variables - don't add unneeded context 'Clean code'
  // noteTitle: string
  // noteText: string

  // Better naming approach:
  title: string
  text: string
}

interface NoteContextValue {
  notes: Note[]
  addNote: (note: Note) => void
  removeNote: (note: Note) => void
}

const NoteContext = createContext({} as NoteContextValue)

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
