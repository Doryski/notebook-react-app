import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import { HOME_PATH } from '../helpers/utils'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80%;
`

export const Link = styled(RouteLink)`
	margin-top: ${({ theme }) => theme.padding.medium};
	background: ${({ theme }) => theme.colors.light};
	padding: ${({ theme }) => theme.padding.medium};
	border-radius: ${({ theme }) => theme.buttons.borderRadius};
	font-size: 3em;
	text-decoration: underline;
	text-align: center;
	&:hover {
		text-decoration: none;
	}
`

const NotFoundPage = () => (
	<Wrapper>
		404! - Page was not found
		<Link to={HOME_PATH}>Go home</Link>
	</Wrapper>
)

export default NotFoundPage
