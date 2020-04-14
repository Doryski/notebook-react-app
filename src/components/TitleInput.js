import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { StyledLabel, Input } from './StyledCommon'

const TitleInput = () => {
	const { title, setTitle } = useContext(GlobalContext)

	return (
		<StyledLabel>
			Title
			<Input
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
		</StyledLabel>
	)
}

export default TitleInput
