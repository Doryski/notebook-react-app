import React from 'react'
import { Label, Input } from './StyledComponents/StyledForm'

const TitleInput = ({ title, handleTitleChange }) => (
	<Label>
		Title
		<Input value={title} onChange={handleTitleChange} />
	</Label>
)

export default TitleInput
