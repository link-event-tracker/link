import React, { Component, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainContainer from './containers/MainContainer';


import Button from '@mui/material/Button';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
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
            primary: '#f9f9f9',
            secondary: '#929191',
          },
          background: {
            paper: 'rgba(4,31,43,0.74)',
            default: '#073a50',
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
            primary: '#f9f9f9',
          },
          background: {
            paper: 'rgba(4,31,43,0.74)',
            default: '#073a50',
          }
        }),
    },
  });

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')));

  return (
    // <div id="app">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer />
    </ThemeProvider>
    // {/* </div> */}
  );
  
};

///
// const theme = React.useMemo(
//   () =>
//     createTheme(
//       {
//         palette: {
//           mode,
//           ...(prefersDarkMode === true
//             ? {
//               type: 'dark',
//               primary: {
//                 main: '#097d76',
//               },
//               secondary: {
//                 main: 'rgb(6, 87, 82)',
//               },
//               error: {
//                 main: '#d32f2f',
//               },
//               info: {
//                 main: '#ad1dad',
//                 light: '#5be2e2',
//               },
//               text: {
//                 primary: '#f9f9f9',
//               },
//               background: {
//                 paper: 'rgba(4,31,43,0.74)',
//                 default: '#073a50',
//               }
//             }
//             : {
//               type: 'light',
//               primary: {
//                 main: '#097d76',
//               },
//               secondary: {
//                 main: 'rgb(6, 87, 82)',
//               },
//               error: {
//                 main: '#d32f2f',
//               },
//               info: {
//                 main: '#ad1dad',
//                 light: '#5be2e2',
//               },
//               text: {
//                 primary: '#f9f9f9',
//                 secondary: '#929191',
//               },
//               background: {
//                 paper: 'rgba(4,31,43,0.74)',
//                 default: '#073a50',
//               },
//             }),
//         },
//         typography: {
//           h3: {
//             fontSize: '1.8rem',
//             fontFamily: '"Lora"',
//           },
//           h6: {
//             fontFamily: '"Lora"',
//           },
//           body2: {
//             fontFamily: '"Lato"',
//           },
//           body1: {
//             fontFamily: '"Lato"',
//           },
//           h5: {
//             fontFamily: '"Lora"',
//           },
//           button: {
//             fontFamily: '"Open sans"',
//           },
//           h2: {
//             fontFamily: '"Lora"',
//           },
//           h1: {
//             fontFamily: '"Merriweather"',
//           },
//           subtitle2: {
//             fontFamily: '"Arial"',
//           },
//           subtitle1: {
//             fontFamily: '"Lora"',
//           },
//           h4: {
//             fontFamily: '"Lora"',
//           },
//         }
//       }
//     )
// );
///

// Newer theme options
// const themeOptions: ThemeOptions = [
//   palette: {
//     mode: prefersDarkMode ? palette: {
//       type: 'dark',
//       primary: {
//         main: '#097d76',
//       },
//       secondary: {
//         main: 'rgb(6, 87, 82)',
//       },
//       error: {
//         main: '#d32f2f',
//       },
//       info: {
//         main: '#ad1dad',
//         light: '#5be2e2',
//       },
//       text: {
//         primary: '#f9f9f9',
//       },
//       background: {
//         paper: 'rgba(4,31,43,0.74)',
//         default: '#073a50',
//       },
//     },
//     typography: {
//       h3: {
//         fontSize: '1.8rem',
//         fontFamily: '"Lora"',
//       },
//       h6: {
//         fontFamily: '"Lora"',
//       },
//       body2: {
//         fontFamily: '"Lato"',
//       },
//       body1: {
//         fontFamily: '"Lato"',
//       },
//       h5: {
//         fontFamily: '"Lora"',
//       },
//       button: {
//         fontFamily: '"Open sans"',
//       },
//       h2: {
//         fontFamily: '"Lora"',
//       },
//       h1: {
//         fontFamily: '"Merriweather"',
//       },
//       subtitle2: {
//         fontFamily: '"Arial"',
//       },
//       subtitle1: {
//         fontFamily: '"Lora"',
//       },
//       h4: {
//         fontFamily: '"Lora"',
//       }
// ];

// Old theme options
// const theme = React.useMemo(
//   () =>
//     createTheme({
//       palette: {
//         mode: prefersDarkMode ? palette: {
//           type: 'dark',
//           primary: {
//             main: '#097d76',
//           },
//           secondary: {
//             main: 'rgb(6, 87, 82)',
//           },
//           error: {
//             main: '#d32f2f',
//           },
//           info: {
//             main: '#ad1dad',
//             light: '#5be2e2',
//           },
//           text: {
//             primary: '#f9f9f9',
//           },
//           background: {
//             paper: 'rgba(4,31,43,0.74)',
//             default: '#073a50',
//           },
//         },
//         typography: {
//           h3: {
//             fontSize: '1.8rem',
//             fontFamily: '"Lora"',
//           },
//           h6: {
//             fontFamily: '"Lora"',
//           },
//           body2: {
//             fontFamily: '"Lato"',
//           },
//           body1: {
//             fontFamily: '"Lato"',
//           },
//           h5: {
//             fontFamily: '"Lora"',
//           },
//           button: {
//             fontFamily: '"Open sans"',
//           },
//           h2: {
//             fontFamily: '"Lora"',
//           },
//           h1: {
//             fontFamily: '"Merriweather"',
//           },
//           subtitle2: {
//             fontFamily: '"Arial"',
//           },
//           subtitle1: {
//             fontFamily: '"Lora"',
//           },
//           h4: {
//             fontFamily: '"Lora"',
//           },
//         },
//         } : palette: {
//           type: 'light',
//           primary: {
//             main: '#0f8998',
//           },
//           secondary: {
//             main: '#396ab3',
//           },
//           error: {
//             main: '#d32f2f',
//           },
//           info: {
//             main: '#0b8787',
//             light: '#5be2e2',
//           },
//         },
//       },
//     }),
//   [prefersDarkMode],
// );
export default App;