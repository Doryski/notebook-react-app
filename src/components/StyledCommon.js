import styled from 'styled-components'

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin-top: ${props => props.theme.padding.medium};
	font-weight: 600;
`

export const Input = styled.input`
			border: none;
			border-bottom: 1px solid
				${props => props.theme.colors.secondary};
			width: 100%;
			margin-top: ${props => props.theme.padding.small};
			background: ${props => props.theme.colors.light};
			padding: ${props => props.theme.padding.medium}
				${props => props.theme.padding.small};
			font-family: inherit;
		`

export const Textarea = styled.textarea`
	display: block;
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	width: 100%;
	margin-top: ${props => props.theme.padding.small};
	padding: ${props => props.theme.padding.small};
	background: ${props => props.theme.colors.light};
	resize: none;
	font-family: inherit;
	height: 100%;
	line-height: 1.5em;

	// scrollbar styling
	::-webkit-scrollbar-track {
		background: ${props => props.theme.colors.light};
	}
	::-webkit-scrollbar-thumb {
		background: ${props => props.theme.colors.primary};
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${props => props.theme.colors.secondaryLight};
	}
`
