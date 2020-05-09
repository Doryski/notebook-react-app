import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { Label, Input } from './StyledComponents/StyledForm'

const TitleInput = () => {
	const { title, setTitle } = useContext(GlobalContext)

	return (
		<Label>
			Title
			<Input
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
		</Label>
	)
}

export default TitleInput
