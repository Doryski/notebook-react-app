import React, { useContext } from 'react'
import styled from 'styled-components'
import { Plus, ChevronLeft } from '@styled-icons/evil'
import { GlobalContext } from '../context'

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin-top: ${props => props.theme.padding.medium};
	font-weight: 600;
`
const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	width: 100%;
	margin-top: ${props => props.theme.padding.small};
	background: ${props => props.theme.colors.light};
	padding: 1.2em 0.8em;
	font-family: inherit;
`
const Textarea = styled.textarea`
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	width: 100%;
	margin-top: ${props => props.theme.padding.small};
	padding: 0 ${props => props.theme.padding.small};
	background: ${props => props.theme.colors.light};
	resize: none;
	font-family: inherit;
`

const ButtonSection = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	height: 3em;
`
const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-left-radius: 12px;
	border: none;
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.secondary};

	&:hover {
		background: ${props => props.theme.colors.light};
	}
`
const RightButton = styled(Button)`
	border-top-left-radius: 0;
	border-top-right-radius: 12px;
`

const AddNotePage = props => {
	const {
		title,
		setTitle,
		body,
		setBody,
		handleAddSubmit,
	} = useContext(GlobalContext)

	return (
		<StyledForm
			onSubmit={e => {
				e.preventDefault()
				handleAddSubmit()
				props.history.push('/')
			}}
		>
			<ButtonSection>
				<Button
					onClick={() => {
						props.history.push('/')
						setTitle('')
						setBody('')
					}}
				>
					<ChevronLeft size='36' />
				</Button>
				<RightButton>
					<Plus size='36' />
				</RightButton>
			</ButtonSection>
			<StyledLabel>
				Title
				<Input
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</StyledLabel>
			<StyledLabel>
				Body
				<Textarea
					rows='18'
					value={body}
					onChange={e => setBody(e.target.value)}
				/>
			</StyledLabel>
		</StyledForm>
	)
}

export default AddNotePage
