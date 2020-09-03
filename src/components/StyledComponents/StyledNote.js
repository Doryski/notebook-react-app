import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NoteWrapper = styled.div`
	border-bottom: 2px dashed
		${({ theme }) => theme.colors.secondaryLight};
	margin-bottom: ${({ theme }) => theme.padding.medium};
	color: ${({ theme }) => theme.colors.secondary};
	display: grid;
	grid-template-rows: repeat(2, auto);
	grid-template-columns: repeat(2, 85% 15%);
`
export const NoteHeader = styled(Link)`
	display: block;
	font-weight: bold;
`

export const NoteContent = styled(Link)`
	display: block;
	grid-row: none;
	padding: ${({ theme }) => theme.padding.medium} 0;
	font-size: 0.9em;
	line-height: 1.3em;
`
export const Button = styled.button`
	grid-row: none;
	text-align: center;
	border: none;
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
`
