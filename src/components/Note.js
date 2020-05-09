import React, { useContext } from 'react'
import { Trash } from '@styled-icons/evil'
import { GlobalContext } from '../context'
import {
	NoteWrapper,
	NoteHeader,
	NoteContent,
	Button,
} from '../components/StyledComponents/StyledNote'
import previewContent from '../functions/previewContent'

const Note = ({ note }) => {
	const { handleRemove, homePath } = useContext(GlobalContext)
	const iconSize = '30'

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
