import React, { useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { Form } from '../components/StyledComponents/StyledForm'
import { HOME_PATH, EDIT_PAGE } from '../helpers/utils'
import useNoteHandler from '../helpers/useNoteHandler'
import { GlobalContext } from '../context'

const EditNotePage = () => {
	const { notes } = useContext(GlobalContext)
	const {
		title,
		body,
		handleEditNote,
		setTitle,
		setBody,
		handleTitleChange,
		handleBodyChange,
	} = useNoteHandler()
	const params = useParams()
	const note = notes.filter(
		note => note.id === params.id && note
	)[0]

	useEffect(() => {
		setTitle(note.title)
		setBody(note.body)
	}, [])
	const history = useHistory()

	const handleSubmit = e => {
		e.preventDefault()
		handleEditNote(note.id, { title, body })
		history.push(HOME_PATH)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<ButtonSection page={EDIT_PAGE} />
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

export default EditNotePage
