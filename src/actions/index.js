import uuid from 'react-uuid'

export const addNote = (title, body) => ({
	type: 'ADD_NOTE',
	id: uuid(),
	title,
	body,
})

export const removeNote = id => ({
	type: 'REMOVE_NOTE',
	id,
})

export const updateNote = (id, updates) => ({
	type: 'UPDATE_NOTE',
	id,
	updates,
})
