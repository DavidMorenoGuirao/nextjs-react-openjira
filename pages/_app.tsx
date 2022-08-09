import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack';

import { UIProvider } from '../context/ui'
import { EntriesProvider } from '../context/entries'

import { lightTheme, darkTheme } from '../themes'
import { useState } from 'react';


// const [theme, setTheme] = useState(lightTheme);



function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(lightTheme);

  
  
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider> 
  ) 
}

export default MyApp
