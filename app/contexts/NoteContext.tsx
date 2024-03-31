"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

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

  const addNotes = (note: Note) => {
    setNotes([...notes, note]);
  };

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
