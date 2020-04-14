import React, {
	useState,
	createContext,
	useReducer,
	useEffect,
} from 'react'
import reducer from '../reducers/reducer'
import initialState from './initialState'
import { addNote, updateNote, removeNote } from '../actions'

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
	const [notes, dispatch] = useReducer(reducer, initialState)
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const homePath = '/notebook-react-app/'
	const iconSize = '36'

	// get notes from localStorage
	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'))

		if (notes) {
			dispatch({
				type: 'GET_NOTES',
				notes,
			})
		}
	}, [])

	// when notes change, update localStorage
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	// adding note
	const handleAddSubmit = () => {
		dispatch(addNote(title, body))
		setTitle('')
		setBody('')
	}

	// editing note
	const handleEditSubmit = (id, updates) => {
		dispatch(updateNote(id, updates))
		setTitle('')
		setBody('')
	}
	// removing note
	const handleRemove = id => {
		dispatch(removeNote(id))
	}

	// filtering
	const [search, setSearch] = useState('')
	const [showInput, setShowInput] = useState(false)

	const handleFilterChange = e => {
		const value = e.target.value || ''
		setSearch(value)
	}

	let filteredData = notes.filter(
		note =>
			note.title.toLowerCase().includes(search.toLowerCase()) ||
			note.body.toLowerCase().includes(search.toLowerCase())
	)
	// end filtering

	return (
		<GlobalContext.Provider
			value={{
				homePath,
				notes,
				title,
				setTitle,
				body,
				setBody,
				handleAddSubmit,
				handleEditSubmit,
				handleRemove,
				handleFilterChange,
				filteredData,
				setSearch,
				showInput,
				setShowInput,
				iconSize,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default ContextProvider
