import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/roboto'; // Optional: Include Material UI fonts
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);