import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { Label, Textarea } from './StyledComponents/StyledForm'
import theme from '../theme'

const BodyInput = () => {
	const { body, setBody } = useContext(GlobalContext)
	const rowsOnMobile = '9'
	const rowsOnDesktop = '13'

	return (
		<Label>
			Body
			<Textarea
				rows={
					window.innerWidth < theme.breakpoints.mobile
						? rowsOnMobile
						: rowsOnDesktop
				}
				value={body}
				onChange={e => setBody(e.target.value)}
			/>
		</Label>
	)
}

export default BodyInput
