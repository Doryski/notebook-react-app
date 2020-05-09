import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextProvider, { GlobalContext } from '../context'
import AddNotePage from './AddNotePage'
import EditNotePage from './EditNotePage'
import NotesListPage from './NotesListPage'
import NotFoundPage from './NotFoundPage'
import Layout from '../theme/ThemeProvider'
import { Wrapper } from '../components/StyledComponents/AppWrapper'

const App = () => {
	return (
		<ContextProvider>
			<GlobalContext.Consumer>
				{({ homePath }) => (
					<BrowserRouter>
						<Layout>
							<Wrapper>
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
