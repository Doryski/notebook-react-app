import styled from 'styled-components'

export const ModalBlur = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	background-color: rgba(75, 65, 65, 0.3);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
`
export const ModalContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.primary};
	min-width: 300px;
	min-height: 200px;
	width: 80%;
	height: 50%;
	border-radius: 25px;
	position: relative;
	@media (min-width: 501px) {
		width: 50%;
	}
`
