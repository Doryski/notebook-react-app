import React from 'react'
import { useHistory } from 'react-router-dom'
import { Check, ChevronLeft, Plus } from '@styled-icons/evil'
import {
	HOME_PATH,
	ICON_SIZE,
	ADD_NOTE,
	EDIT_NOTE,
} from '../helpers/utils'
import useNoteHandler from '../helpers/useNoteHandler'
import useModalHandler from '../helpers/useModalHandler'
import modalData from '../helpers/modalData'
import {
	Wrapper,
	LeftButton,
	RightButton,
} from './shared/StyledButtonSection'
import Modal from './shared/Modal'

const ButtonSection = ({
	page,
	handleUpdateBtnClick,
	didNoteChange,
	title,
	body,
	handleAddBtnClick,
}) => {
	const { resetNote } = useNoteHandler()
	const history = useHistory()

	const { isModalOpen, open, close } = useModalHandler(false)
	const handleConfirmLeaveClick = () => {
		history.push(HOME_PATH)
		resetNote()
		close()
	}
	const handleLeaveBtnClick = () => {
		if (
			(page === ADD_NOTE && (!!title || !!body)) ||
			(page === EDIT_NOTE && didNoteChange)
		) {
			open()
			return
		}
		handleConfirmLeaveClick()
	}

	return (
		<>
			<Wrapper>
				<LeftButton onClick={handleLeaveBtnClick}>
					<ChevronLeft size={ICON_SIZE} />
				</LeftButton>
				{page === ADD_NOTE && (
					<RightButton onClick={handleAddBtnClick}>
						<Plus size={ICON_SIZE} />
					</RightButton>
				)}
				{page === EDIT_NOTE && (
					<RightButton onClick={handleUpdateBtnClick}>
						<Check size={ICON_SIZE} />
					</RightButton>
				)}
			</Wrapper>
			{/* only if changes were made */}
			<Modal
				data={modalData.leave}
				isModalOpen={isModalOpen}
				close={close}
				onLeftBtnClick={handleConfirmLeaveClick}
				onRightBtnClick={close}
			/>
		</>
	)
}

export default ButtonSection
