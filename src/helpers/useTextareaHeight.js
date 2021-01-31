import { useLayoutEffect, useState } from 'react'

export default function useTextareaHeight(textareaRef) {
	const [maxHeight, setMaxHeight] = useState(0)

	useLayoutEffect(() => {
		const appWrapper = document.querySelector('.appWrapper')
		const value =
			-textareaRef.current.offsetTop -
			textareaRef.current.offsetLeft +
			appWrapper.offsetLeft +
			appWrapper.offsetTop +
			appWrapper.offsetHeight

		setMaxHeight(value)
	}, [textareaRef])

	return maxHeight
}
