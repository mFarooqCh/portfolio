import './App.css';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout';
export default function App() {
  const [theme, settheme] = useState(false);

  //inside this, we can override any object's value with our own.
  const customTheme = createTheme({
    typography: {
      fontFamily: "'Lato', sans-serif",
    },
    palette: {
      mode: theme ? 'dark' : 'light',
      blue: {
        main: '#1976d2',
        light: '#729ED9',
        dark: '#174793',
        contrastText: '#fff',
      },
      golden: {
        main: '#FCC100',
        light: '#FFDF01',
        dark: '#F1A300',
        contrastText: '#386CB9',
      },
    },
  });

  const toggle = () => {
    settheme(theme == true ? false : true);
  };

  return (
    <div className='App'>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Layout toggle={toggle} themeMode={theme} />
      </ThemeProvider>
    </div>
  );
}
