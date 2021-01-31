import useModalHandler from './useModalHandler'
import useNoteHandler from './useNoteHandler'

export default function useDeleteNote(note) {
	const { id, title, body } = note
	const { handleRemoveNote } = useNoteHandler()
	const { isModalOpen, open, close } = useModalHandler(false)
	const handleConfirmRemoveClick = () => {
		handleRemoveNote(id)
		close()
	}
	const isNoteEmpty = !(title || body)

	const handleTrashClick = () => {
		if (!isNoteEmpty) {
			open()
			return
		}
		handleConfirmRemoveClick()
	}
	return {
		handleTrashClick,
		handleConfirmRemoveClick,
		isModalOpen,
		open,
		close,
		isNoteEmpty,
	}
}
