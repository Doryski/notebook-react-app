import React, { useContext, useState } from 'react'
import Note from './Note'
import Header from './Header'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import useShowInput from '../helpers/useShowInput'

const NotesListWrapper = styled.div`
	overflow-y: auto;
`

const NotesListPage = () => {
	const { notes } = useContext(GlobalContext)
	const { showInput, toggleShowInput } = useShowInput(false)
	const [search, setSearch] = useState('')

	const handleFilterChange = e => {
		const value = e.target.value || ''
		setSearch(value)
	}
	const filteredData = notes.filter(
		note =>
			note.title.toLowerCase().includes(search.toLowerCase()) ||
			note.body.toLowerCase().includes(search.toLowerCase())
	)
	return (
		<>
			<Header
				showInput={showInput}
				handleFilterChange={handleFilterChange}
				toggleShowInput={toggleShowInput}
			/>
			<NotesListWrapper>
				{(showInput ? filteredData : notes).map(note => (
					<Note key={note.id} note={note} />
				))}
			</NotesListWrapper>
		</>
	)
}

export default NotesListPage
