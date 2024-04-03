import React from 'react'
import { useNotes } from '../contexts/NoteContext'

interface SimpleAlertDialogProps {
  message: string
  onClose: () => void
  onRemove: () => void
}

const ConfirmationAlert: React.FC<SimpleAlertDialogProps> = ({
  message,
  onClose,
  onRemove,
}) => {
  // Unused code - this code should be removed 'Clean code'
  // const { removeNote } = useNotes()
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className="bg-white m-6 md:m-auto p-6 rounded shadow-lg md:text-lg">
        <div className="text-xl mb-4">{message}</div>
        <hr />
        <div className="flex flex-1 justify-end mt-6">
          <button
            onClick={onRemove}
            className="px-4 py-2 bg-red-500 text-white mr-5 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600 md:text-lg"
          >
            Remove
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600 md:text-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationAlert
