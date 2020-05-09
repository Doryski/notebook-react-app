import React, { useContext } from 'react'
import { Trash } from '@styled-icons/evil'
import { GlobalContext } from '../context'
import {
	NoteWrapper,
	NoteHeader,
	NoteContent,
	Button,
} from '../components/StyledComponents/StyledNote'

const Note = ({ note }) => {
	const { handleRemove, homePath } = useContext(GlobalContext)
	const iconSize = '30'
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
			<NoteHeader to={`${homePath}editNote/${note.id}`}>
				{note.title}
			</NoteHeader>
			<NoteContent to={`${homePath}editNote/${note.id}`}>
				<p>{previewContent(note.body)}</p>
			</NoteContent>
			<Button onClick={() => handleRemove(note.id)}>
				<Trash size={iconSize} />
			</Button>
		</NoteWrapper>
	)
}

export default Note
