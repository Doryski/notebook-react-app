import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin-top: ${({ theme }) => theme.padding.medium};
	font-weight: 600;
`

export const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
	width: 100%;
	margin-top: ${({ theme }) => theme.padding.small};
	background: ${({ theme }) => theme.colors.light};
	padding: ${({ theme }) =>
		`${theme.padding.medium} ${theme.padding.small}`};
	font-family: inherit;
`

export const Textarea = styled.textarea`
	display: block;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
	width: 100%;
	margin-top: ${({ theme }) => theme.padding.small};
	padding: ${({ theme }) => theme.padding.small};
	background: ${({ theme }) => theme.colors.light};
	resize: none;
	font-family: inherit;
	height: 100%;
	line-height: 1.5em;

	// scrollbar styling
	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.light};
	}
	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.primary};
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => theme.colors.secondaryLight};
	}
`
