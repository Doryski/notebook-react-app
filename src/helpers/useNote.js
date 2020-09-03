import { useParams } from 'react-router-dom'

export default function useNote() {
	const params = useParams()
	const note = notes.filter(
		note => note.id === params.id && note
	)[0]

	useEffect(() => {
		setTitle(note.title)
		setBody(note.body)
	}, [])
}
