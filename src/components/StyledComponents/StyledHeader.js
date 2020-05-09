import styled from 'styled-components'
import { Wrapper } from './StyledButtonSection'
import { Link as RouteLink } from 'react-router-dom'

export const ButtonSection = styled(Wrapper)`
	display: grid;
	grid-template-columns: repeat(2, auto);
	height: 3em;
	margin-bottom: ${props => props.theme.padding.medium};
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	border: none;
	border-top-right-radius: ${props =>
		props.theme.buttons.borderRadius};
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.secondary};
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`

export const Link = styled(RouteLink)`
	display: ${props =>
		props.showlink === 'true' ? 'block' : 'none'};
	width: 100%;
	height: 100%;
	border-top-left-radius: ${props =>
		props.theme.buttons.borderRadius};
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

export const Input = styled.input`
	display: ${props => (props.show ? 'block' : 'none')};
	background: ${props => props.theme.colors.light};
	border: none;
	border-top-left-radius: ${props =>
		props.theme.buttons.borderRadius};
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	padding: 0 ${props => props.theme.padding.small};
	font-family: inherit;
`
