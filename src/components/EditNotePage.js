import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { GlobalContext } from '../context'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { Form } from '../components/StyledComponents/StyledForm'

const EditNotePage = () => {
	const {
		notes,
		title,
		setTitle,
		body,
		setBody,
		handleEditSubmit,
		homePath,
	} = useContext(GlobalContext)
	const history = useHistory()
	const params = useParams()
	const note = notes.filter(
		note => note.id === params.id && note
	)[0]

	useEffect(() => {
		setTitle(note.title)
		setBody(note.body)
	}, [])

	return (
		<Form
			onSubmit={e => {
				e.preventDefault()
				handleEditSubmit(note.id, { title, body })
				history.push(homePath)
			}}
		>
			<ButtonSection page='edit' history={history} />
			<TitleInput />
			<BodyInput />
		</Form>
	)
}

export default EditNotePage
