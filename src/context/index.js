import React, { createContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/reducer'
import initialState from '../helpers/initialState'

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
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

	return (
		<GlobalContext.Provider value={{ notes, dispatch }}>
			{children}
		</GlobalContext.Provider>
	)
}

export default ContextProvider
