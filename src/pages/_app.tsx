import React from 'react';
import {AppProps} from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState('theme', dark);

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp;
