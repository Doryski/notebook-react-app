import React from 'react'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { Form } from './StyledComponents/StyledForm'
import { ADD_PAGE, HOME_PATH } from '../helpers/utils'
import useNoteHandler from '../helpers/useNoteHandler'
import { useHistory } from 'react-router-dom'

const AddNotePage = () => {
	const {
		handleAddNote,
		handleTitleChange,
		handleBodyChange,
		title,
		body,
	} = useNoteHandler()
	const history = useHistory()
	const handleSubmit = e => {
		e.preventDefault()
		handleAddNote()
		history.push(HOME_PATH)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<ButtonSection page={ADD_PAGE} />
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
