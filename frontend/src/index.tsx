import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from "./utils/theme/theme";
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
