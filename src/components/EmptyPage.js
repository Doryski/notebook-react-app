import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import { Plus } from '@styled-icons/evil'
import Center from './shared/Center'
import { ADD_NOTE, HOME_PATH, ICON_SIZE } from '../helpers/utils'

export const Link = styled(RouteLink)`
	margin-top: 1em;
	padding: 0.5em 1em;
	background-color: transparent;
	border: 1px dashed ${({ theme }) => theme.colors.secondary};
	border-radius: 5px;
`
export const CenterContent = styled(Center)`
	width: 50%;
	margin: auto;
	transform: translateY(-20px);
	display: flex;
	flex-direction: column;
	line-height: 1.5em;
`

const EmptyPage = () => (
	<CenterContent>
		<span>Looks like you haven&apost made any notes yet.</span>
		<strong>Click here to create one.</strong>
		<Link to={HOME_PATH + ADD_NOTE}>
			<Plus size={ICON_SIZE} />
		</Link>
	</CenterContent>
)

export default EmptyPage
