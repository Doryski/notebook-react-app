import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import Note from './Note'
import Header from './Header'
import EmptyPage from './EmptyPage'
import useShowInput from '../helpers/useShowInput'
import useNotesFilter from '../helpers/useNotesFilter'

export const NotesListWrapper = styled.div`
	overflow-y: auto;
	height: 100%;
`

const NotesListPage = () => {
	const { notes } = useContext(GlobalContext)
	const { showInput, toggleShowInput } = useShowInput(false)
	const { filteredData, handleFilterChange } = useNotesFilter(notes)

	return (
		<>
			<Header
				showInput={showInput}
				handleFilterChange={handleFilterChange}
				toggleShowInput={toggleShowInput}
			/>
			<NotesListWrapper>
				{!notes.length && <EmptyPage showInput={showInput} />}
				{(!!notes.length && showInput
					? filteredData
					: notes
				).map(note => (
					<Note key={note.id} note={note} />
				))}
			</NotesListWrapper>
		</>
	)
}

export default NotesListPage
