import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { StyledForm } from './StyledCommon'

const EditNotePage = props => {
	const {
		notes,
		title,
		setTitle,
		body,
		setBody,
		handleEditSubmit,
		homePath
	} = useContext(GlobalContext)

	const note = notes.filter(
		note => note.id === props.match.params.id && note
	)[0]

	useEffect(() => {
		setTitle(note.title)
		setBody(note.body)
	}, [])

	return (
		<StyledForm
			onSubmit={e => {
				e.preventDefault()
				handleEditSubmit(note.id, { title, body })
				props.history.push(homePath)
			}}
		>
			<ButtonSection page='edit' history={props.history} />

			<TitleInput />
			<BodyInput />

		</StyledForm>
	)
}

export default EditNotePage
