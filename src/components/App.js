import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import ContextProvider from '../context'
import Layout from '../theme/ThemeProvider'
import { ADD_NOTE, EDIT_NOTE, HOME_PATH } from '../helpers/utils'
import EditNotePage from './EditNotePage'
import NotesListPage from './NotesListPage'
import AddNotePage from './AddNotePage'
import NotFoundPage from './NotFoundPage'
import bgImg from '../images/bg_img.jpg'

export const BackgroundImg = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	background-size: cover;
	background-image: url(${bgImg});
`
export const Wrapper = styled.div`
	height: 100%;
	min-width: 300px;
	max-width: 500px;
	width: 100%;
	border-radius: unset;
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: ${({ theme }) => theme.padding.large};
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};

	@media (min-width: 501px) {
		width: 80%;
		height: 80vh;
		border-radius: 20px;
	}
`
const App = () => (
	<ContextProvider>
		<BrowserRouter>
			<Layout>
				<BackgroundImg>
					<Wrapper className='appWrapper'>
						<Switch>
							<Route
								exact
								path={HOME_PATH}
								component={NotesListPage}
							/>
							<Route
								path={HOME_PATH + EDIT_NOTE + '/:id'}
								component={EditNotePage}
							/>
							<Route
								path={HOME_PATH + ADD_NOTE}
								component={AddNotePage}
							/>
							<Route component={NotFoundPage} />
						</Switch>
					</Wrapper>
				</BackgroundImg>
			</Layout>
		</BrowserRouter>
	</ContextProvider>
)

export default App
