import React from 'react'
import { Label, Input } from './shared/NoteForm'

const TitleInput = ({ title, handleTitleChange }) => (
	<Label>
		Title
		<Input
			placeholder='Add title'
			value={title}
			onChange={handleTitleChange}
		/>
	</Label>
)

export default TitleInput
