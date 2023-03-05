import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Appbar from './components/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import SocialLinksWidget from './components/SocialLinksWidget';

export default function App() {
  const [theme, settheme] = useState(false);

  //insi de this, we can override any object's value with our own.
  const customTheme = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light',
    },
  });

  const handleChange = (event) => {
    settheme(event.target.checked);
  };
  return (
    <div className='App'>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Main></Main>
        <Appbar></Appbar>
        <Typography>
          Switch to Dark mode?
          <Switch checked={theme} color='success' onChange={handleChange} />
        </Typography>
        <SocialLinksWidget />
      </ThemeProvider>
    </div>
  );
}
