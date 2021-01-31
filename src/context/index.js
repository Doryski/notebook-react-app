import React, { createContext } from 'react'
import reducer from '../store/reducer'
import initialState from '../helpers/initialState'
import useNotesStorage from '../helpers/useNotesStorage'

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
	const { notes, dispatch } = useNotesStorage(reducer, initialState)

	return (
		<GlobalContext.Provider value={{ notes, dispatch }}>
			{children}
		</GlobalContext.Provider>
	)
}

export default ContextProvider
