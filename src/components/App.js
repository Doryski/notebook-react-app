import React from 'react'
import ContextProvider, { GlobalContext } from '../context'
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
			{/* add context consumer to get homePath variable */}
			<GlobalContext.Consumer>
				{({ homePath }) => (
					<BrowserRouter>
						{/* styled components theme provider */}
						<Layout>
							{/* app wrapper */}
							<Wrapper>
								{/* router */}
								<Switch>
									<Route
										exact={true}
										path={homePath}
										component={NotesListPage}
									/>
									<Route
										path={`${homePath}editNote/:id`}
										component={EditNotePage}
									/>
									<Route
										path={`${homePath}addNote`}
										component={AddNotePage}
									/>
									<Route component={NotFoundPage} />
								</Switch>
							</Wrapper>
						</Layout>
					</BrowserRouter>
				)}
			</GlobalContext.Consumer>
		</ContextProvider>
	)
}

export default App
