import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '.'
import Montserrat from '../fonts/Montserrat/Montserrat-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
    }
    
    body {
        font-family: 'Montserrat', sans-serif;
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
    
    ul {
        list-style-type: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.secondary};
    }
    input, button, textarea {
        outline: none;
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
		background: ${({ theme }) => theme.colors.primary};
		border-radius: 15px;
	}
	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.light};
		border-radius: 15px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => theme.colors.secondaryLight};
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
