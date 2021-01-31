const previewContent = (content, cutAfter, cutBefore) => {
	// finds whitespace after given number of signs
	if (content.length > 75) {
		const space =
			cutAfter + content.slice(cutAfter, cutBefore).indexOf(' ')
		// returns content without cutting words
		return `${content.slice(0, space)}...`
	}
	return content
}

export default previewContent
