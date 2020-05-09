import styled from 'styled-components'

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	height: 3em;
`
export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-top-left-radius: ${props =>
		props.theme.buttons.borderRadius};
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.secondary};

	&:hover {
		background: ${props => props.theme.colors.light};
	}
`
export const RightButton = styled(Button)`
	border-top-left-radius: 0;
	border-top-right-radius: ${props =>
		props.theme.buttons.borderRadius};
`
