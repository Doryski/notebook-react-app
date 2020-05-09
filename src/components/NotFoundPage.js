import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80%;
`

const Link = styled(RouteLink)`
	margin-top: ${props => props.theme.padding.medium};
	background: ${props => props.theme.colors.light};
	padding: ${props => props.theme.padding.medium};
	border-radius: ${props => props.theme.buttons.borderRadius};
	font-size: 3em;
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
`

const NotFoundPage = () => {
	const { homePath } = useContext(GlobalContext)
	return (
		<Wrapper>
			404! - Page was not found
			<Link to={homePath}>Go home</Link>
		</Wrapper>
	)
}

export default NotFoundPage
