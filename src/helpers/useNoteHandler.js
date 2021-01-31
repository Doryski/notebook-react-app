import { useContext, useState } from 'react'
import { GlobalContext } from '../context'
import { addNote, removeNote, updateNote } from '../store/actions'

export default function useNoteHandler() {
	const { dispatch } = useContext(GlobalContext)
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const resetNote = () => {
		setTitle('')
		setBody('')
	}
	const handleAddNote = () => {
		dispatch(addNote(title, body))
	}
	const handleEditNote = (id, updates) => {
		dispatch(updateNote(id, updates))
	}

	const handleRemoveNote = id => {
		dispatch(removeNote(id))
	}

	const handleTitleChange = e => setTitle(e.target.value)
	const handleBodyChange = e => setBody(e.target.value)

	return {
		title,
		setTitle,
		body,
		setBody,
		resetNote,
		handleAddNote,
		handleEditNote,
		handleRemoveNote,
		handleTitleChange,
		handleBodyChange,
	}
}
