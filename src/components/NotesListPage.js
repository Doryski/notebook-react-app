import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import Note from './Note'
import Header from './Header'
import styled from 'styled-components'

const NotesListWrapper = styled.div`
	overflow-y: auto;
`

const NotesListPage = () => {
	const { filteredData, showInput, notes } = useContext(
		GlobalContext
	)

	return (
		<>
			<Header />
			<NotesListWrapper>
				{(showInput ? filteredData : notes).map(note => (
					<Note key={note.id} note={note} />
				))}
			</NotesListWrapper>
		</>
	)
}

export default NotesListPage
