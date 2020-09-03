import React from 'react'
import { Trash } from '@styled-icons/evil'
import {
	NoteWrapper,
	NoteHeader,
	NoteContent,
	Button,
} from '../components/StyledComponents/StyledNote'
import previewContent from '../helpers/previewContent'
import { HOME_PATH } from '../helpers/utils'
import useNoteHandler from '../helpers/useNoteHandler'

const ICON_SIZE = '30'

const Note = ({ note }) => {
	const { id, title, body } = note
	const { handleRemoveNote } = useNoteHandler()

	return (
		<NoteWrapper>
			<NoteHeader to={`${HOME_PATH}editNote/${id}`}>
				{title}
			</NoteHeader>
			<NoteContent to={`${HOME_PATH}editNote/${id}`}>
				<p>{previewContent(body)}</p>
			</NoteContent>
			<Button onClick={() => handleRemoveNote(id)}>
				<Trash size={ICON_SIZE} />
			</Button>
		</NoteWrapper>
	)
}

export default Note
