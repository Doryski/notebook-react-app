const previewContent = content => {
	// finds whitespace after
	if (content.length > 75) {
		const i = 70
		const space = i + content.slice(i, 100).indexOf(' ')
		// returns content without cutting words
		return `${content.slice(0, space)}...`
	}
	return content
}

export default previewContent
