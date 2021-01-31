import { useState } from 'react'

export default function useModalHandler(initialState) {
	const [isModalOpen, setIsModalOpen] = useState(initialState)

	return {
		open: () => setIsModalOpen(true),
		close: () => setIsModalOpen(false),
		toggle: () => setIsModalOpen(!isModalOpen),
		isModalOpen,
	}
}
