import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import {
  RecoilRoot,} from 'recoil';
  import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      // Override any other properties from default theme
      fontFamily: 'Open Sans, sans serif',
      spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      colorScheme: 'dark',
      colors:{  'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885']
    }}}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </MantineProvider>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
