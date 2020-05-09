import React, { useContext } from 'react'
import { Check, ChevronLeft, Plus } from '@styled-icons/evil'
import { GlobalContext } from '../context'
import {
	Wrapper,
	Button,
	RightButton,
} from '../components/StyledComponents/StyledButtonSection'

const ButtonSection = ({ page, history }) => {
	const { setTitle, setBody, homePath, iconSize } = useContext(
		GlobalContext
	)

	return (
		<Wrapper>
			<Button
				onClick={() => {
					history.push(homePath)
					setTitle('')
					setBody('')
				}}
			>
				<ChevronLeft size={iconSize} />
			</Button>
			<RightButton>
				{page === 'add' ? (
					<Plus size={iconSize} />
				) : (
					<Check size={iconSize} />
				)}
			</RightButton>
		</Wrapper>
	)
}

export default ButtonSection
