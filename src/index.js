import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import GlobalStyles from 'style/GlobalStyles';
import Theme from 'style/ThemeProvider';
import LanguageProvider from 'context/LanguageContext';
import ThemeProvider from 'context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
    <ThemeProvider>
      <Theme >
        <App />
        <GlobalStyles />
      </Theme>
    </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
