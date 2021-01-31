import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Trash } from '@styled-icons/evil'
import Modal from './shared/Modal'
import previewContent from '../helpers/previewContent'
import modalData from '../helpers/modalData'
import { EDIT_NOTE, HOME_PATH, ICON_SIZE } from '../helpers/utils'
import useDeleteNote from '../helpers/useDeleteNote'

export const NoteWrapper = styled.div`
	border-bottom: 2px dashed
		${({ theme }) => theme.colors.secondaryLight};
	margin-bottom: ${({ theme }) => theme.padding.medium};
	color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	justify-content: space-between;
`
export const NoteInfo = styled(Link)`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`

export const NoteHeader = styled.div`
	font-weight: bold;
`

export const NoteContent = styled.div`
	grid-row: none;
	padding: ${({ theme }) => theme.padding.medium} 0;
	font-size: 0.9em;
	line-height: 1.3em;
`
export const DeleteButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 4%;
	grid-row: none;
	text-align: center;
	border: none;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
`

const Note = ({ note }) => {
	const { id, title, body } = note

	const {
		handleTrashClick,
		handleConfirmRemoveClick,
		isModalOpen,
		close,
	} = useDeleteNote(note)

	return (
		<>
			<NoteWrapper>
				<NoteInfo to={`${HOME_PATH + EDIT_NOTE}/${id}`}>
					<NoteHeader>{title}</NoteHeader>
					<NoteContent>
						<p>{previewContent(body, 70, 100)}</p>
					</NoteContent>
				</NoteInfo>
				<DeleteButton onClick={handleTrashClick}>
					<Trash size={(5 / 6) * ICON_SIZE} />
				</DeleteButton>
			</NoteWrapper>
			<Modal
				data={modalData.delete}
				isModalOpen={isModalOpen}
				close={close}
				onLeftBtnClick={handleConfirmRemoveClick}
				onRightBtnClick={close}
			/>
		</>
	)
}

export default Note
