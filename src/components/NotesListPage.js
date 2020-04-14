import React, { useContext } from 'react'
import Note from './Note'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import Header from './Header'

const NotesListWrapper = styled.div`
	overflow: auto;
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
