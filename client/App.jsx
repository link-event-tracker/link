import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainContainer from './containers/MainContainer';



const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: {
            main: '#03676c', 
          },
          secondary: {
            main: 'rgb(6, 87, 82)', 
          },
          error: {
            main: '#d32f2f' 
          },
          info: {
            main: '#ad1dad',
            light: '#5be2e2',
          },
          text: {
            primary: '#f9f9f9',
            secondary: '#929191',
          },
          background: {
            paper: 'rgba(4,31,43,0.74)',
            default: '#3e717c',
          },
        }
        : {
          // palette values for dark mode
          primary: {
            main: '#097d76',
          },
          secondary: {
            main: 'rgb(6, 87, 82)',
          },
          error: {
            main: '#d32f2f',
          },
          info: {
            main: '#ad1dad',
            light: '#5be2e2',
          },
          text: {
            primary: '#00303F',
          },
          background: {
            paper: 'rgba(4,31,43,0.74)',
            default: '#3e717c',
          }
        }),
    },
    typography: {
      h3: {
        fontSize: '1.8rem',
        fontFamily: '"Lora"',
      },
      h6: {
        fontFamily: '"Lora"',
      },
      body2: {
        fontFamily: '"Lato"',
      },
      body1: {
        fontFamily: '"Lato"',
      },
      h5: {
        fontSize: '1.1rem',
        fontFamily: '"Lora"',
      },
      button: {
        fontFamily: '"Open sans"',
      },
      h2: {
        fontFamily: '"Lora"',
      },
      h1: {
        fontFamily: '"Merriweather"',
      },
      subtitle2: {
        fontFamily: '"Arial"',
      },
      subtitle1: {
        fontFamily: '"Lora"',
      },
      h4: {
        fontFamily: '"Lora"',
      },
    }
  });

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer />
    </ThemeProvider>
  );
  
};

export default App;