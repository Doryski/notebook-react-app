import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background: ${props => props.theme.colors.primary};
	padding: ${props => props.theme.padding.medium}
		${props => props.theme.padding.large};
	color: ${props => props.theme.colors.secondary};

	@media (max-width: ${props => props.theme.breakpoints.mobile}px) {
		margin: auto;
	}
`
