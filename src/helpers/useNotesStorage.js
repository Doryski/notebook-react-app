import { useReducer, useEffect } from 'react'

export default function useNotesStorage(reducer, initialState) {
	const [notes, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'))

		if (notes) {
			dispatch({
				type: 'GET_NOTES',
				notes,
			})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	return { notes, dispatch }
}
