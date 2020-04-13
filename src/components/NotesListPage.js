import React, { useContext } from 'react'
import Note from './Note'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import Header from './Header'

const NotesListWrapper = styled.div`
	overflow: auto;

	// scrollbar styling
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background: ${props => props.theme.colors.primary};
		border-radius: 15px;
	}
	::-webkit-scrollbar-thumb {
		background: ${props => props.theme.colors.light};
		border-radius: 15px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${props => props.theme.colors.secondaryLight};
	}
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
