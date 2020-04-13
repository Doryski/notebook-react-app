import React, { useContext } from 'react'
import { Trash } from '@styled-icons/evil'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context'
import { removeNote } from '../actions'

const NoteWrapper = styled.div`
	border-bottom: 2px dashed
		${props => props.theme.colors.secondaryLight};
	margin-bottom: ${props => props.theme.padding.medium};
	color: ${props => props.theme.colors.secondary};
	display: grid;
	grid-template-rows: repeat(2, auto);
	grid-template-columns: repeat(2, 85% 15%);
`
const NoteHeader = styled(Link)`
	display: block;
	font-weight: bold;
`

const NoteContent = styled(Link)`
	display: block;
	grid-row: none;
	padding: ${props => props.theme.padding.medium} 0;
	font-size: 0.9em;
`
const Button = styled.button`
	grid-row: none;
	text-align: center;
	border: none;
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.secondary};
`

const Note = ({ note }) => {
	const { handleRemove } = useContext(GlobalContext)

	const previewContent = content => {
		// finds whitespace after
		if (content.length > 75) {
			const i = 70
			const space = i + content.slice(i, 100).indexOf(' ')
			// returns content without cutting words
			return `${content.slice(0, space)}...`
		} else {
			return content
		}
	}

	return (
		<NoteWrapper>
			<NoteHeader
				to={`/notebook-react-app/editNote/${note.id}`}
			>
				{note.title}
			</NoteHeader>
			<NoteContent
				to={`/notebook-react-app/editNote/${note.id}`}
			>
				<p>{previewContent(note.body)}</p>
			</NoteContent>
			<Button onClick={() => handleRemove(note.id)}>
				<Trash size='30' />
			</Button>
		</NoteWrapper>
	)
}

export default Note
