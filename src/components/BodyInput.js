import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { StyledLabel, Textarea } from './StyledCommon'

const BodyInput = () => {
	const { body, setBody } = useContext(GlobalContext)

	return (
		<StyledLabel>
			Body
			<Textarea
				rows={window.innerWidth < 768 ? '9' : '13'}
				value={body}
				onChange={e => setBody(e.target.value)}
			/>
		</StyledLabel>
	)
}

export default BodyInput
