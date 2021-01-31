import React from 'react'
import { Search, Plus, Close } from '@styled-icons/evil'
import {
	Wrapper,
	Link,
	Input,
	RightButton,
} from './shared/StyledButtonSection'
import { HOME_PATH, ICON_SIZE, ADD_NOTE } from '../helpers/utils'

const Header = ({
	showInput,
	handleFilterChange,
	toggleShowInput,
}) => (
	<Wrapper withMargin>
		<Link show={!showInput} to={HOME_PATH + ADD_NOTE}>
			<Plus size={ICON_SIZE} />
		</Link>
		<Input
			type='text'
			show={showInput}
			onChange={handleFilterChange}
			placeholder='Search...'
		/>
		<RightButton onClick={toggleShowInput}>
			{showInput ? (
				<Close size={ICON_SIZE} />
			) : (
				<Search size={ICON_SIZE} />
			)}
		</RightButton>
	</Wrapper>
)

export default Header
