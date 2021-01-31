import React, { useRef } from 'react'
import { Label, Textarea } from './shared/NoteForm'
import useTextareaHeight from '../helpers/useTextareaHeight'

const BodyInput = ({ body, handleBodyChange }) => {
	const textareaRef = useRef(null)
	const maxHeight = useTextareaHeight(textareaRef)

	return (
		<Label>
			Body
			<Textarea
				ref={textareaRef}
				maxHeight={maxHeight}
				placeholder='Add description'
				rows={1000}
				value={body}
				onChange={handleBodyChange}
			/>
		</Label>
	)
}

export default BodyInput
