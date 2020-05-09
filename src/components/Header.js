import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { Search, Plus, Close } from '@styled-icons/evil'
import {
	ButtonSection,
	Link,
	Input,
	Button,
} from '../components/StyledComponents/StyledHeader'

const Header = () => {
	const {
		handleFilterChange,
		showInput,
		setShowInput,
		homePath,
		iconSize,
	} = useContext(GlobalContext)
	const placeholder = 'Search...'
	return (
		<ButtonSection>
			<Link
				showlink={(!showInput).toString()}
				to={`${homePath}addNote`}
			>
				<Plus size={iconSize} />
			</Link>
			<Input
				type='text'
				show={showInput}
				onChange={handleFilterChange}
				placeholder={placeholder}
			/>
			<Button onClick={() => setShowInput(!showInput)}>
				{showInput ? (
					<Close size={iconSize} />
				) : (
					<Search size={iconSize} />
				)}
			</Button>
		</ButtonSection>
	)
}

export default Header
