import React, { lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextProvider from '../context'
import Layout from '../theme/ThemeProvider'
import { Wrapper } from '../components/StyledComponents/AppWrapper'
import Center from '../components/StyledComponents/Center'
import { HOME_PATH } from '../helpers/utils'
import EditNotePage from './EditNotePage'
const AddNotePage = lazy(() =>
	import(/* webpackChunkName: "AddNotePage" */ './AddNotePage')
)
const NotesListPage = lazy(() =>
	import(/* webpackChunkName: "NotesListPage" */ './NotesListPage')
)
const NotFoundPage = lazy(() =>
	import(/* webpackChunkName: "NotFoundPage" */ './NotFoundPage')
)

const App = () => (
	<ContextProvider>
		<BrowserRouter>
			<Layout>
				<Wrapper>
					<React.Suspense
						fallback={
							<Center>
								<h1>Loading...</h1>
							</Center>
						}
					>
						<Switch>
							<Route
								exact={true}
								path={HOME_PATH}
								component={NotesListPage}
							/>
							<Route
								path={`${HOME_PATH}editNote/:id`}
								component={EditNotePage}
							/>
							<Route
								path={`${HOME_PATH}addNote`}
								component={AddNotePage}
							/>
							<Route component={NotFoundPage} />
						</Switch>
					</React.Suspense>
				</Wrapper>
			</Layout>
		</BrowserRouter>
	</ContextProvider>
)

export default App
