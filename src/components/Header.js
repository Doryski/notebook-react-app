import React from 'react'
import { Search, Plus, Close } from '@styled-icons/evil'
import { HOME_PATH, PLACEHOLDER, ICON_SIZE } from '../helpers/utils'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from './StyledComponents/StyledButtonSection'

const Header = ({
	showInput,
	handleFilterChange,
	toggleShowInput,
}) => {
	return (
		<ButtonSection>
			<Link show={!showInput} to={HOME_PATH + 'addNote'}>
				<Plus size={ICON_SIZE} />
			</Link>
			<Input
				type='text'
				show={showInput}
				onChange={handleFilterChange}
				placeholder={PLACEHOLDER}
			/>
			<Button onClick={toggleShowInput}>
				{showInput ? (
					<Close size={ICON_SIZE} />
				) : (
					<Search size={ICON_SIZE} />
				)}
			</Button>
		</ButtonSection>
	)
}
export const ButtonSection = styled(Wrapper)`
	display: grid;
	grid-template-columns: repeat(2, auto);
	height: 3em;
	margin-bottom: ${({ theme }) => theme.padding.medium};
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-top-right-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
	&:hover {
		background: ${({ theme }) => theme.colors.light};
	}
`
export const Input = styled.input`
	display: ${({ show }) => (show ? 'block' : 'none')};
	background: ${({ theme }) => theme.colors.light};
	border: none;
	border-top-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
	padding: 0 ${({ theme }) => theme.padding.small};
	font-family: inherit;
`

export const Link = styled(({ show, ...props }) => (
	<RouteLink {...props} />
))`
	display: ${({ show }) => (show ? 'block' : 'none')};
	width: 100%;
	height: 100%;
	border-top-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	color: ${({ theme }) => theme.colors.secondary};

	& svg {
		margin: auto;
		display: block;
		height: 100%;
	}
	&:hover {
		background: ${({ theme }) => theme.colors.light};
	}
`
export default Header
