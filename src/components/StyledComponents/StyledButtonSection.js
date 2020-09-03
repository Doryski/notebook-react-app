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
	border-top-left-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};

	&:hover {
		background: ${({ theme }) => theme.colors.light};
	}
`
export const RightButton = styled(Button)`
	border-top-left-radius: 0;
	border-top-right-radius: ${({ theme }) =>
		theme.buttons.borderRadius};
`
