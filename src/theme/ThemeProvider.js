import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '.'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Montserrat, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #app {
        min-width: 300px;
        width: 80%;
        max-width: 500px;
    }
    
    ul {
        list-style-type: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme.colors.secondary};
    }

    button {
        cursor: pointer;
        text-align: center;
    }

    // scrollbar styling
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background: ${props => props.theme.colors.primary};
		border-radius: 15px;
	}
	::-webkit-scrollbar-thumb {
		background: ${props => props.theme.colors.light};
		border-radius: 15px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${props => props.theme.colors.secondaryLight};
	}
`

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			{children}
		</>
	</ThemeProvider>
)

export default Layout
