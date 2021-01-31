import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: auto auto;
	height: 3em;
	margin-bottom: ${({ theme, withMargin }) =>
		withMargin ? theme.padding.medium : 0};
`
export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	transition: background-color 0.3s;
	color: ${({ theme }) => theme.colors.secondary};
	background-color: ${({ theme }) => theme.colors.light};
	@media (min-width: 501px) {
		background-color: ${({ theme }) => theme.colors.primary};
		&:hover {
			background-color: ${({ theme }) => theme.colors.light};
		}
	}
`
export const LeftButton = styled(Button)`
	border-bottom-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	border-top-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	border-right: 1px solid ${({ theme }) => theme.colors.secondary};
	@media (min-width: 501px) {
		border-right: unset;
		border-bottom-left-radius: unset;
	}
`

export const RightButton = styled(Button)`
	border-top-right-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	border-bottom-right-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	@media (min-width: 501px) {
		border-bottom-right-radius: unset;
	}
`

export const Input = styled.input`
	display: ${({ show }) => (show ? 'block' : 'none')};
	background: ${({ theme }) => theme.colors.light};
	border: none;
	padding: 0 ${({ theme }) => theme.padding.small};
	font-family: inherit;
	border-top-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`

export const Link = styled(({ show, ...props }) => (
	<RouteLink {...props} />
))`
	display: ${({ show }) => (show ? 'block' : 'none')};
	width: 100%;
	height: 100%;
	color: ${({ theme }) => theme.colors.secondary};
	transition: background-color 0.3s;
	border-top-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	border-bottom-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	background-color: ${({ theme }) => theme.colors.light};
	border-right: 1px solid ${({ theme }) => theme.colors.secondary};
	& svg {
		margin: auto;
		display: block;
		height: 100%;
	}

	@media (min-width: 501px) {
		background-color: ${({ theme }) => theme.colors.primary};
		border-bottom-left-radius: unset;
		border-right: unset;
		&:hover {
			background-color: ${({ theme }) => theme.colors.light};
		}
	}
`
