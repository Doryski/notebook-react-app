export default (state, action) => {
	switch (action.type) {
		case 'GET_NOTES':
			return action.notes
		case 'ADD_NOTE':
			return [
				{
					id: action.id,
					title: action.title,
					body: action.body,
				},
				...state,
			]
		case 'UPDATE_NOTE':
			return state.map(note => {
				if (note.id === action.id) {
					return { ...note, ...action.updates }
				} else {
					return note
				}
			})
		case 'REMOVE_NOTE':
			return state.filter(note => note.id !== action.id)
		default:
			return state
	}
}
