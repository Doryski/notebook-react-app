import React from 'react'
import { Check, ChevronLeft, Plus } from '@styled-icons/evil'
import {
	Wrapper,
	Button,
	RightButton,
} from '../components/StyledComponents/StyledButtonSection'
import { HOME_PATH, ICON_SIZE, ADD_PAGE } from '../helpers/utils'
import { useHistory } from 'react-router-dom'
import useNoteHandler from '../helpers/useNoteHandler'

const ButtonSection = ({ page }) => {
	const { resetNote } = useNoteHandler()
	const history = useHistory()
	const handleReturnBtnClick = () => {
		history.push(HOME_PATH)
		resetNote()
	}

	return (
		<Wrapper>
			<Button onClick={handleReturnBtnClick}>
				<ChevronLeft size={ICON_SIZE} />
			</Button>
			<RightButton>
				{page === ADD_PAGE ? (
					<Plus size={ICON_SIZE} />
				) : (
					<Check size={ICON_SIZE} />
				)}
			</RightButton>
		</Wrapper>
	)
}

export default ButtonSection
