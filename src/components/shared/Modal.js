import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import useDetectOutsideClick from '../../helpers/useDetectOutsideClick'
import Center from './Center'
import { ModalBlur, ModalContent } from './ModalStyled'
import {
	Button,
	LeftButton,
	RightButton,
	Wrapper,
} from './StyledButtonSection'

export const ButtonsWrapper = styled(Wrapper)`
	width: 90%;
	margin: 0 auto 1em;
`
export const LeftBtn = styled(LeftButton)`
	@media (min-width: 501px) {
		border-bottom-left-radius: ${({ theme }) =>
			theme.buttons.borderRadius};
	}
`
export const RightBtn = styled(RightButton)`
	@media (min-width: 501px) {
		border-bottom-right-radius: ${({ theme }) =>
			theme.buttons.borderRadius};
	}
`
export const CenterContent = styled(Center)`
	padding: 0 2em;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.secondary};
`
export const OkayBtnWrapper = styled(ButtonsWrapper)`
	display: flex;
`

export const OkayBtn = styled(Button)`
	font: inherit;
	font-size: 1.3em;
	font-weight: 500;
	width: 100%;
	border-radius: ${({ theme }) => theme.buttons.borderRadius};
`

const Modal = ({
	data,
	isModalOpen,
	close,
	onLeftBtnClick,
	onRightBtnClick,
	onOkayBtnClick,
	didNoteChange,
}) => {
	const modalRef = useRef(null)
	useDetectOutsideClick(modalRef, close)
	const { action, content, leftBtn, rightBtn } = data

	if (!isModalOpen) return null

	return ReactDOM.createPortal(
		<ModalBlur>
			<ModalContent ref={modalRef}>
				<CenterContent>
					{action === 'UPDATE'
						? didNoteChange
							? content
							: 'No changes were made.'
						: content}
				</CenterContent>
				{action !== 'UPDATE' || didNoteChange ? (
					<ButtonsWrapper>
						<LeftBtn onClick={onLeftBtnClick}>
							{leftBtn}
						</LeftBtn>

						<RightBtn onClick={onRightBtnClick}>
							{rightBtn}
						</RightBtn>
					</ButtonsWrapper>
				) : (
					<OkayBtnWrapper>
						<OkayBtn onClick={onOkayBtnClick}>
							Okay
						</OkayBtn>
					</OkayBtnWrapper>
				)}
			</ModalContent>
		</ModalBlur>,
		document.getElementById('portal')
	)
}

export default Modal
