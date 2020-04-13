import React from 'react'
import ContextProvider from '../context'
import AddNotePage from './AddNotePage'
import EditNotePage from './EditNotePage'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotesListPage from './NotesListPage'
import NotFoundPage from './NotFoundPage'
import Layout from '../theme/ThemeProvider'

const Wrapper = styled.div`
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	background: ${props => props.theme.colors.primary};
	border-radius: 20px;
	padding: ${props => props.theme.padding.medium}
		${props => props.theme.padding.large};
	color: ${props => props.theme.colors.secondary};

	@media (max-width: 768px) {
		margin: auto;
	}
`

const App = () => {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Layout>
					<Wrapper>
						<Switch>
							<Route
								exact={true}
								path='/notebook-react-app/'
								component={NotesListPage}
							/>
							<Route
								path='/notebook-react-app/editNote/:id'
								component={EditNotePage}
							/>
							<Route
								path='/notebook-react-app/addNote'
								component={AddNotePage}
							/>
							<Route component={NotFoundPage} />
						</Switch>
					</Wrapper>
				</Layout>
			</BrowserRouter>
		</ContextProvider>
	)
}

export default App
