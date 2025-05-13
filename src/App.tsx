import './App.css';
import Index from './MainContainer/index';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  // A global MUI theme is created to remove the default focus outline on inputs, buttons and icon buttons
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
            '&.Mui-focusVisible': {
              outline: 'none',
              boxShadow: 'none',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
            '&.Mui-focusVisible': {
              outline: 'none',
              boxShadow: 'none',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            '&:hover': {
              outline: 'none',
            },
            '&:focus': {
              outline: 'none',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Index/>
    </ThemeProvider>
  )
}

export default App
