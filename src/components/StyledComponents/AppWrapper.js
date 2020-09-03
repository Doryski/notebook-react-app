import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.primary};
	padding: ${({ theme }) =>
		`${theme.padding.medium} ${theme.padding.large}`};
	color: ${({ theme }) => theme.colors.secondary};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin: auto;
	}
`
