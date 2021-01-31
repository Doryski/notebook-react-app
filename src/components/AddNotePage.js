import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { Form } from './shared/NoteForm'
import { ADD_NOTE, HOME_PATH } from '../helpers/utils'
import useNoteHandler from '../helpers/useNoteHandler'
import handleSubmit from '../helpers/handleSubmit'

const AddNotePage = () => {
	const {
		handleAddNote,
		handleTitleChange,
		handleBodyChange,
		title,
		body,
	} = useNoteHandler()
	const history = useHistory()
	const handleAddBtnClick = () => {
		handleAddNote()
		history.push(HOME_PATH)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<ButtonSection
				page={ADD_NOTE}
				title={title}
				body={body}
				handleAddBtnClick={handleAddBtnClick}
			/>
			<TitleInput
				title={title}
				handleTitleChange={handleTitleChange}
			/>
			<BodyInput
				body={body}
				handleBodyChange={handleBodyChange}
			/>
		</Form>
	)
}

export default AddNotePage
