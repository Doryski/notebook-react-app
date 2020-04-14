import React, { useContext, useState } from 'react'
import { Search, Plus, Close } from '@styled-icons/evil'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context'

const ButtonSection = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	height: 3em;
	margin-bottom: ${props => props.theme.padding.medium};
`

const Button = styled.button`
	display: flex;
	justify-content: center;
	border: none;
	border-top-right-radius: 12px;
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.secondary};
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`

const StyledLink = styled(Link)`
	display: ${props =>
		props.showlink === 'true' ? 'block' : 'none'};
	width: 100%;
	height: 100%;
	border-top-left-radius: 12px;
	color: ${props => props.theme.colors.secondary};

	& svg {
		margin: auto;
		display: block;
		height: 100%;
	}
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`

const Input = styled.input`
	display: ${props => (props.show ? 'block' : 'none')};
	background: ${props => props.theme.colors.light};
	border: none;
	border-top-left-radius: 12px;
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	padding: 0 ${props => props.theme.padding.small};
	font-family: inherit;
`

const Header = () => {
	const {
		handleFilterChange,
		showInput,
		setShowInput,
		homePath,
		iconSize
	} = useContext(GlobalContext)

	return (
		<ButtonSection>
			<StyledLink
				showlink={(!showInput).toString()}
				to={`${homePath}addNote`}
			>
				<Plus size={iconSize} />
			</StyledLink>
			<Input
				type='text'
				show={showInput}
				onChange={handleFilterChange}
				placeholder='Search...'
			/>
			<Button onClick={() => setShowInput(!showInput)}>
				{showInput ? (
					<Close size={iconSize} />
				) : (
					<Search size={iconSize} />
				)}
			</Button>
		</ButtonSection>
	)
}

export default Header
