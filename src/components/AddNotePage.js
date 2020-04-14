import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import ButtonSection from './ButtonSection'
import TitleInput from './TitleInput'
import BodyInput from './BodyInput'
import { StyledForm } from './StyledCommon'

const AddNotePage = props => {
	const { handleAddSubmit, homePath } = useContext(GlobalContext)

	return (
		<StyledForm
			onSubmit={e => {
				e.preventDefault()
				handleAddSubmit()
				props.history.push(homePath)
			}}
		>
			<ButtonSection page='add' history={props.history} />
			<TitleInput />
			<BodyInput />
		</StyledForm>
	)
}

export default AddNotePage
