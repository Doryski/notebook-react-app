import useModalHandler from './useModalHandler'
import useNoteChangeDetector from './useNoteChangeDetector'
import useNoteHandler from './useNoteHandler'
import { HOME_PATH } from './utils'

export default function useUpdateNote(prevState, updates, history) {
	const { isModalOpen, open, close } = useModalHandler(false)
	const { handleEditNote } = useNoteHandler()

	const handleConfirmUpdateClick = () => {
		handleEditNote(prevState.id, updates)
		history.push(HOME_PATH)
		close()
	}
	const didNoteChange = useNoteChangeDetector(
		{ title: prevState.title, body: prevState.body },
		{ title: updates.title, body: updates.body }
	)

	return {
		isModalOpen,
		open,
		close,
		handleConfirmUpdateClick,
		didNoteChange,
	}
}
