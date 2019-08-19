import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-jss';

import theme from './theme';
import App from './App';

import 'normalize.css';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
