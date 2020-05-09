import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { Form } from './StyledComponents/StyledForm'
import { useHistory } from 'react-router-dom'

const AddNotePage = () => {
	const { handleAddSubmit, homePath } = useContext(GlobalContext)
	const history = useHistory()

	return (
		<Form
			onSubmit={e => {
				e.preventDefault()
				handleAddSubmit()
				history.push(homePath)
			}}
		>
			<ButtonSection page='add' history={history} />
			<TitleInput />
			<BodyInput />
		</Form>
	)
}

export default AddNotePage
