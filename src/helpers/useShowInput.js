import { useState } from 'react'

export default function useShowInput(initialState) {
	const [showInput, setShowInput] = useState(initialState)

	const toggleShowInput = () => setShowInput(!showInput)

	return {
		showInput,
		toggleShowInput,
	}
}
