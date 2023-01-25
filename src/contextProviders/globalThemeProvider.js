import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { defaultColor } from '../constants/colorCode';


const theme = createTheme({
  palette: {
    mode: 'dark',
  }
});



const GlobalThemeProvider = (props) => {
  return (<ThemeProvider theme={theme}>{props.children}</ThemeProvider>)
};

export default GlobalThemeProvider; 