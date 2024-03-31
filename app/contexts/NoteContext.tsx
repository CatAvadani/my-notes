"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Note {
  title: string;
  text: string;
}

interface NoteContextValue {
  notes: Note[];
  addNotes: (note: Note) => void;
}

const NoteContext = createContext({} as NoteContextValue);

function NotesProvider(props: PropsWithChildren) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes, isLoaded]);

  const addNotes = (note: Note) => {
    setNotes([...notes, note]);
  };

  console.log(notes);

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

export const useNotes = () => useContext(NoteContext);
export default NotesProvider;
