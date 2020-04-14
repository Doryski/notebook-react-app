import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalContext } from '../context'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80%;
`

const StyledLink = styled(Link)`
	margin-top: ${props => props.theme.padding.medium};
	background: ${props => props.theme.colors.light};
	padding: ${props => props.theme.padding.medium};
	border-radius: 12px;
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
			<StyledLink to={homePath}>Go home</StyledLink>
		</Wrapper>
	)
}

export default NotFoundPage
