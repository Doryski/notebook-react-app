import React, { useContext } from 'react'
import styled from 'styled-components'
import { Check, ChevronLeft, Plus } from '@styled-icons/evil'
import { GlobalContext } from '../context'

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	height: 3em;
`
const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-top-left-radius: 12px;
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.secondary};

	&:hover {
		background: ${props => props.theme.colors.light};
	}
`
const RightButton = styled(Button)`
	border-top-left-radius: 0;
	border-top-right-radius: 12px;
`

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
