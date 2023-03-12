import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Appbar from './components/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SocialLinksWidget from './widgets/SocialLinksWidget';

export default function App() {
  const [themeState, settheme] = useState(false);

  const toggle = () => {
    settheme(themeState == true ? false : true);
  };

  //insi de this, we can override any object's value with our own.
  const customTheme = createTheme({
    palette: {
      mode: themeState ? 'dark' : 'light',
    },
  });

  return (
    <div className='App'>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Main></Main>
        <Appbar toggle={toggle} themeState={themeState}></Appbar>
        <SocialLinksWidget className='fab' />
      </ThemeProvider>
    </div>
  );
}
