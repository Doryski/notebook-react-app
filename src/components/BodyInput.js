import React from 'react'
import { Label, Textarea } from './StyledComponents/StyledForm'
import theme from '../theme'

const BodyInput = ({ body, handleBodyChange }) => {
	const ROWS_ON_MOBILE = '9'
	const ROWS_ON_DESKTOP = '13'
	const numberOfRows =
		window.innerWidth < theme.breakpoints.mobile
			? ROWS_ON_MOBILE
			: ROWS_ON_DESKTOP

	return (
		<Label>
			Body
			<Textarea
				rows={numberOfRows}
				value={body}
				onChange={handleBodyChange}
			/>
		</Label>
	)
}

export default BodyInput
