import { useEffect, useState } from 'react'

export default function useNoteChangeDetector(prevNote, newNote) {
	const [didNoteChange, setDidNoteChange] = useState(false)

	useEffect(() => {
		const value =
			prevNote.title !== newNote.title ||
			prevNote.body !== newNote.body
		setDidNoteChange(value)
	}, [prevNote, newNote])

	return didNoteChange
}
