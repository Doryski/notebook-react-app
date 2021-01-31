import { useEffect } from 'react'

// Usage:
// useDetectOutsideClick(modalRef, closeModal)
// useDetectOutsideClick(modalRef, () => setIsModalOpen(false))
export default function useDetectOutsideClick(ref, closeHandler) {
	const listener = event => {
		if (!ref.current || ref.current.contains(event.target)) return

		closeHandler()
	}
	useEffect(() => {
		document.addEventListener('mousedown', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
		}
	})
}
