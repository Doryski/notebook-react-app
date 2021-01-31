import React, { useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { Form } from './shared/NoteForm'
import Modal from './shared/Modal'
import useNoteHandler from '../helpers/useNoteHandler'
import modalData from '../helpers/modalData'
import handleSubmit from '../helpers/handleSubmit'
import { EDIT_NOTE } from '../helpers/utils'
import useUpdateNote from '../helpers/useUpdateNote'

const EditNotePage = () => {
	const { notes } = useContext(GlobalContext)
	const {
		title,
		body,
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

	const {
		isModalOpen,
		close,
		open,
		handleConfirmUpdateClick,
		didNoteChange,
	} = useUpdateNote(note, { title, body }, history)

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<ButtonSection
					page={EDIT_NOTE}
					handleUpdateBtnClick={open}
					didNoteChange={didNoteChange}
				/>
				<TitleInput
					title={title}
					handleTitleChange={handleTitleChange}
				/>
				<BodyInput
					body={body}
					handleBodyChange={handleBodyChange}
				/>
				<Modal
					data={modalData.update}
					isModalOpen={isModalOpen}
					close={close}
					didNoteChange={didNoteChange}
					onLeftBtnClick={handleConfirmUpdateClick}
					onRightBtnClick={close}
					onOkayBtnClick={close}
				/>
			</Form>
		</>
	)
}

export default EditNotePage
