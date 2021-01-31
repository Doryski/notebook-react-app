import { useState } from 'react'

export default function useNotesFilter(notes) {
	const [search, setSearch] = useState('')

	const handleFilterChange = e => {
		const value = e.target.value || ''
		setSearch(value)
	}
	const filteredData = notes.filter(
		({ title, body }) =>
			title.toLowerCase().includes(search.toLowerCase()) ||
			body.toLowerCase().includes(search.toLowerCase())
	)
	return { search, filteredData, handleFilterChange }
}
